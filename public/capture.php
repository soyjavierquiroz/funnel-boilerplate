<?php
declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// Editar este valor por dominio/funnel o mover a variable de entorno del servidor.
$FLUENTCRM_WEBHOOK_URL = 'https://crm.aprendermotores.com/?fluentcrm=1&route=contact&hash=5af34da0-2037-41e4-a42d-1283c6317183';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

function respond_json(int $statusCode, array $body): void
{
    http_response_code($statusCode);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_json(405, [
        'ok' => false,
        'error' => 'Method not allowed',
    ]);
}

$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput === false ? '' : $rawInput, true);

if (!is_array($payload) || json_last_error() !== JSON_ERROR_NONE) {
    error_log('[capture.php] Invalid JSON payload: ' . json_last_error_msg());
    respond_json(400, [
        'ok' => false,
        'error' => 'Invalid JSON payload',
    ]);
}

$name = isset($payload['name']) && is_string($payload['name']) ? trim($payload['name']) : '';
$firstName = isset($payload['first_name']) && is_string($payload['first_name']) ? trim($payload['first_name']) : '';
$email = isset($payload['email']) && is_string($payload['email']) ? trim($payload['email']) : '';

if ($name === '' && $firstName === '') {
    respond_json(422, [
        'ok' => false,
        'error' => 'Name is required',
    ]);
}

if ($email === '') {
    respond_json(422, [
        'ok' => false,
        'error' => 'Email is required',
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond_json(422, [
        'ok' => false,
        'error' => 'Email is invalid',
    ]);
}

$payload['email'] = $email;

if (empty($payload['submitted_at']) || !is_string($payload['submitted_at'])) {
    $payload['submitted_at'] = gmdate('c');
}

if (empty($payload['page_url']) || !is_string($payload['page_url'])) {
    $payload['page_url'] = $_SERVER['HTTP_REFERER'] ?? '';
}

$encodedPayload = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

if ($encodedPayload === false) {
    error_log('[capture.php] Failed to encode payload: ' . json_last_error_msg());
    respond_json(500, [
        'ok' => false,
        'error' => 'Failed to prepare payload',
    ]);
}

if (!function_exists('curl_init')) {
    error_log('[capture.php] cURL extension is not available');
    respond_json(500, [
        'ok' => false,
        'error' => 'Server is missing cURL support',
    ]);
}

$curl = curl_init($FLUENTCRM_WEBHOOK_URL);

if ($curl === false) {
    error_log('[capture.php] Failed to initialize cURL');
    respond_json(500, [
        'ok' => false,
        'error' => 'Failed to initialize request',
    ]);
}

curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $encodedPayload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HEADER => false,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Content-Type: application/json',
    ],
]);

$fluentcrmResponse = curl_exec($curl);
$curlError = curl_error($curl);
$fluentcrmStatus = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
curl_close($curl);

if ($fluentcrmResponse === false) {
    error_log('[capture.php] FluentCRM cURL error: ' . $curlError);
    respond_json(502, [
        'ok' => false,
        'error' => 'Upstream request failed',
    ]);
}

if ($fluentcrmStatus < 200 || $fluentcrmStatus >= 300) {
    error_log(sprintf('[capture.php] FluentCRM responded with HTTP %d: %s', $fluentcrmStatus, $fluentcrmResponse));
    respond_json($fluentcrmStatus > 0 ? $fluentcrmStatus : 502, [
        'ok' => false,
        'error' => 'Upstream request failed',
        'upstream_status' => $fluentcrmStatus,
    ]);
}

respond_json(200, [
    'ok' => true,
    'upstream_status' => $fluentcrmStatus,
]);

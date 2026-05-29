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

function read_payload_string(array $payload, string $field): string
{
    return isset($payload[$field]) && is_string($payload[$field]) ? trim($payload[$field]) : '';
}

function read_nested_string(array $payload, string $field): string
{
    return isset($payload[$field]) && is_string($payload[$field]) ? trim($payload[$field]) : '';
}

function is_field_name_literal(string $value, string $flatField, string $nestedField): bool
{
    return $value === $flatField || $value === $nestedField;
}

function truncate_for_log(string $value, int $maxLength = 4000): string
{
    if (strlen($value) <= $maxLength) {
        return $value;
    }

    return substr($value, 0, $maxLength) . '... [truncated]';
}

function debug_log_json(string $label, array $payload): void
{
    $encodedPayload = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    if ($encodedPayload === false) {
        error_log('[capture.php] ' . $label . ': failed to encode debug payload');
        return;
    }

    error_log('[capture.php] ' . $label . ': ' . truncate_for_log($encodedPayload));
}

function build_debug_payload_snapshot(array $payload): array
{
    $debugPayload = [];
    $allowedFields = [
        'email',
        'list',
        'lists',
        'funnel_type',
        'theme',
        'landing_slug',
        'ip',
        'city',
        'state',
        'country',
        'timezone',
        'visitor_ip',
        'visitor_city',
        'visitor_region',
        'visitor_country',
        'visitor_country_code',
        'visitor_timezone',
        'visitor_currency',
        'visitor_country_calling_code',
    ];

    foreach ($allowedFields as $field) {
        if (array_key_exists($field, $payload)) {
            $debugPayload[$field] = $payload[$field];
        }
    }

    if (isset($payload['custom_values']) && is_array($payload['custom_values'])) {
        $debugPayload['custom_values'] = $payload['custom_values'];
    }

    if (isset($payload['custom_fields']) && is_array($payload['custom_fields'])) {
        $debugPayload['custom_fields'] = $payload['custom_fields'];
    }

    if (isset($payload['visitor']) && is_array($payload['visitor'])) {
        $debugPayload['visitor'] = $payload['visitor'];
    }

    return $debugPayload;
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

debug_log_json('received payload debug', build_debug_payload_snapshot($payload));

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

$visitor = isset($payload['visitor']) && is_array($payload['visitor']) ? $payload['visitor'] : [];
$visitorFieldMap = [
    'visitor_ip' => 'ip',
    'visitor_city' => 'city',
    'visitor_region' => 'region',
    'visitor_country' => 'country',
    'visitor_country_code' => 'country_code',
    'visitor_timezone' => 'timezone',
    'visitor_currency' => 'currency',
    'visitor_country_calling_code' => 'country_calling_code',
];
$normalizedVisitor = [];

foreach ($visitorFieldMap as $flatField => $nestedField) {
    $value = read_payload_string($payload, $flatField);

    if (is_field_name_literal($value, $flatField, $nestedField)) {
        $value = '';
    }

    if ($value === '') {
        $value = read_nested_string($visitor, $nestedField);
    }

    if (is_field_name_literal($value, $flatField, $nestedField)) {
        $value = '';
    }

    if ($value === '' && $nestedField === 'country') {
        $value = read_nested_string($visitor, 'country_name');
    }

    if (is_field_name_literal($value, $flatField, $nestedField)) {
        $value = '';
    }

    $payload[$flatField] = $value;
    $normalizedVisitor[$nestedField] = $value;
}

$payload['visitor'] = array_merge($visitor, $normalizedVisitor);

$standardFieldMap = [
    'ip' => $payload['visitor_ip'],
    'city' => $payload['visitor_city'],
    'state' => $payload['visitor_region'],
    'country' => $payload['visitor_country_code'] !== '' ? $payload['visitor_country_code'] : $payload['visitor_country'],
    'timezone' => $payload['visitor_timezone'],
];

foreach ($standardFieldMap as $field => $value) {
    if (read_payload_string($payload, $field) === '' && $value !== '') {
        $payload[$field] = $value;
    }
}

$attributionFields = [
    'funnel_type',
    'theme',
    'landing_slug',
];
$customValueFields = array_merge(array_keys($visitorFieldMap), $attributionFields);
$visitorCustomValues = [];

foreach ($customValueFields as $field) {
    if (read_payload_string($payload, $field) !== '') {
        $visitorCustomValues[$field] = $payload[$field];
    }
}

if ($visitorCustomValues !== []) {
    $existingCustomValues = isset($payload['custom_values']) && is_array($payload['custom_values'])
        ? $payload['custom_values']
        : [];
    $existingCustomFields = isset($payload['custom_fields']) && is_array($payload['custom_fields'])
        ? $payload['custom_fields']
        : [];

    $payload['custom_values'] = array_merge($existingCustomValues, $visitorCustomValues);
    $payload['custom_fields'] = array_merge($existingCustomFields, $visitorCustomValues);
}

debug_log_json('sent payload debug', build_debug_payload_snapshot($payload));

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

error_log('[capture.php] FluentCRM HTTP status: ' . $fluentcrmStatus);

if (is_string($fluentcrmResponse)) {
    error_log('[capture.php] FluentCRM response body: ' . truncate_for_log($fluentcrmResponse));
}

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

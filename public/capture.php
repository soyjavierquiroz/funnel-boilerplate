<?php
declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

/*
|--------------------------------------------------------------------------
| SITE CAPTURE CONFIG
|--------------------------------------------------------------------------
| Para clonar este relay en un nuevo sitio, cambiar solo:
| - webhooks_by_channel: URLs privadas de FluentCRM por canal.
| - allowed_channels: canales que este sitio acepta en traffic_channel.
| - log_labels: textos de logs temporales para identificar este relay.
|
| No exponer los webhooks al frontend, no moverlos a variables VITE y no
| duplicarlos en React. El frontend solo debe apuntar a este capture.php.
*/
$CAPTURE_CHANNEL_ADS = 'ads';
$CAPTURE_CHANNEL_ORGANIC = 'organic';

$SITE_CAPTURE_CONFIG = [
    'webhooks_by_channel' => [
        $CAPTURE_CHANNEL_ADS => 'https://crm.aprendermotores.com/?fluentcrm=1&route=contact&hash=5af34da0-2037-41e4-a42d-1283c6317183',
        $CAPTURE_CHANNEL_ORGANIC => 'https://crm.aprendermotores.com/?fluentcrm=1&route=contact&hash=a9c924a4-b755-46e0-8f02-a9e92ef7ac8f',
    ],
    'allowed_channels' => [
        $CAPTURE_CHANNEL_ADS,
        $CAPTURE_CHANNEL_ORGANIC,
    ],
    'log_labels' => [
        'prefix' => '[capture.php]',
        'received_payload_debug' => 'received payload debug',
        'routing_debug' => 'routing debug',
        'sent_payload_debug' => 'sent payload debug',
        'debug_payload_encode_failed' => 'failed to encode debug payload',
        'invalid_json_payload' => 'Invalid JSON payload',
        'payload_encode_failed' => 'Failed to encode payload',
        'curl_missing' => 'cURL extension is not available',
        'curl_init_failed' => 'Failed to initialize cURL',
        'fluentcrm_http_status' => 'FluentCRM HTTP status',
        'fluentcrm_response_body' => 'FluentCRM response body',
        'fluentcrm_curl_error' => 'FluentCRM cURL error',
        'fluentcrm_http_response_error' => 'FluentCRM responded with HTTP',
    ],
];

$CAPTURE_WEBHOOKS_BY_CHANNEL = $SITE_CAPTURE_CONFIG['webhooks_by_channel'];
$CAPTURE_ALLOWED_CHANNELS = $SITE_CAPTURE_CONFIG['allowed_channels'];
$CAPTURE_LOG_LABELS = $SITE_CAPTURE_CONFIG['log_labels'];

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

function capture_log_label(string $key): string
{
    global $CAPTURE_LOG_LABELS;

    return isset($CAPTURE_LOG_LABELS[$key]) && is_string($CAPTURE_LOG_LABELS[$key])
        ? $CAPTURE_LOG_LABELS[$key]
        : $key;
}

function capture_error_log(string $message): void
{
    error_log(capture_log_label('prefix') . ' ' . $message);
}

function debug_log_json(string $label, array $payload): void
{
    $encodedPayload = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

    if ($encodedPayload === false) {
        capture_error_log($label . ': ' . capture_log_label('debug_payload_encode_failed'));
        return;
    }

    capture_error_log($label . ': ' . truncate_for_log($encodedPayload));
}

function log_capture_routing(
    string $trafficChannel,
    string $captureRoute,
    string $upstream
): void {
    debug_log_json(capture_log_label('routing_debug'), [
        'traffic_channel' => $trafficChannel,
        'capture_route' => $captureRoute,
        'upstream_selected' => $upstream,
    ]);
}

function build_debug_payload_snapshot(array $payload): array
{
    $debugPayload = [];
    $allowedFields = [
        'email',
        'list',
        'lists',
        'traffic_channel',
        'capture_route',
        'capture_list_slug',
        'confirmation_path',
        'source',
        'page_url',
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
    capture_error_log(capture_log_label('invalid_json_payload') . ': ' . json_last_error_msg());
    respond_json(400, [
        'ok' => false,
        'error' => 'Invalid JSON payload',
    ]);
}

debug_log_json(capture_log_label('received_payload_debug'), build_debug_payload_snapshot($payload));

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

$trafficChannel = strtolower(read_payload_string($payload, 'traffic_channel'));

if ($trafficChannel === '') {
    respond_json(422, [
        'ok' => false,
        'error' => 'Traffic channel is required',
    ]);
}

if (!in_array($trafficChannel, $CAPTURE_ALLOWED_CHANNELS, true)) {
    respond_json(422, [
        'ok' => false,
        'error' => 'Traffic channel is invalid',
    ]);
}

$captureRoute = $trafficChannel;
$fluentcrmWebhookUrl = $CAPTURE_WEBHOOKS_BY_CHANNEL[$trafficChannel];
$payload['traffic_channel'] = $trafficChannel;
$payload['capture_route'] = $captureRoute;

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
    'traffic_channel',
    'capture_route',
    'capture_list_slug',
    'confirmation_path',
    'source',
    'page_url',
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

log_capture_routing(
    $trafficChannel,
    $captureRoute,
    $captureRoute
);
debug_log_json(capture_log_label('sent_payload_debug'), build_debug_payload_snapshot($payload));

$encodedPayload = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

if ($encodedPayload === false) {
    capture_error_log(capture_log_label('payload_encode_failed') . ': ' . json_last_error_msg());
    respond_json(500, [
        'ok' => false,
        'error' => 'Failed to prepare payload',
    ]);
}

if (!function_exists('curl_init')) {
    capture_error_log(capture_log_label('curl_missing'));
    respond_json(500, [
        'ok' => false,
        'error' => 'Server is missing cURL support',
    ]);
}

$curl = curl_init($fluentcrmWebhookUrl);

if ($curl === false) {
    capture_error_log(capture_log_label('curl_init_failed'));
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

error_log(sprintf(
    '%s %s: %d; traffic_channel=%s; upstream_selected=%s',
    capture_log_label('prefix'),
    capture_log_label('fluentcrm_http_status'),
    $fluentcrmStatus,
    $trafficChannel,
    $captureRoute
));

if (is_string($fluentcrmResponse)) {
    capture_error_log(capture_log_label('fluentcrm_response_body') . ': ' . truncate_for_log($fluentcrmResponse));
}

if ($fluentcrmResponse === false) {
    capture_error_log(capture_log_label('fluentcrm_curl_error') . ': ' . $curlError);
    respond_json(502, [
        'ok' => false,
        'error' => 'Upstream request failed',
    ]);
}

if ($fluentcrmStatus < 200 || $fluentcrmStatus >= 300) {
    capture_error_log(sprintf('%s %d: %s', capture_log_label('fluentcrm_http_response_error'), $fluentcrmStatus, $fluentcrmResponse));
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

<?php
declare(strict_types=1);

// Install this file as public_html/contact.php on the dedicated Hostinger site.
// The real configuration and nonce ledger stay ABOVE public_html.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-Robots-Tag: noindex, nofollow');

function reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false]);
}
if (!str_starts_with(strtolower($_SERVER['CONTENT_TYPE'] ?? ''), 'application/json')) reply(415, ['ok' => false]);
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 65536) reply(413, ['ok' => false]);
$body = file_get_contents('php://input', false, null, 0, 65537);
if ($body === false || strlen($body) > 65536) reply(413, ['ok' => false]);
$configPath = dirname(__DIR__) . '/biomasschains-relay-config.php';
if (!is_file($configPath)) reply(503, ['ok' => false]);
$config = require $configPath;
if (!is_array($config) || strlen($config['RELAY_SECRET'] ?? '') < 32) reply(503, ['ok' => false]);
$signature = $_SERVER['HTTP_X_BIOMASS_SIGNATURE'] ?? '';
if (!preg_match('/^[a-f0-9]{64}$/D', $signature) || !hash_equals(hash_hmac('sha256', $body, $config['RELAY_SECRET']), $signature)) reply(401, ['ok' => false]);
try { $data = json_decode($body, true, 32, JSON_THROW_ON_ERROR); }
catch (Throwable $failure) { reply(400, ['ok' => false]); }
if (!is_array($data) || !is_numeric($data['timestamp'] ?? null) || abs(microtime(true) * 1000 - (float)$data['timestamp']) > 60000 ||
    !preg_match('/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/D', $data['id'] ?? '')) reply(400, ['ok' => false]);
foreach (['name' => 120, 'email' => 254, 'company' => 200, 'message' => 6000, 'path' => 300, 'ip' => 100, 'ua' => 500] as $field => $limit) {
    if (!is_string($data[$field] ?? null) || preg_match_all('/./us', $data[$field]) > $limit) reply(400, ['ok' => false]);
}
if ($data['name'] === '' || $data['message'] === '' || !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ||
    preg_match('/[\r\n\x00]/', $data['name'] . $data['email'] . $data['company'] . $data['path']) || preg_match('/https?:\/\//i', $data['message'])) reply(400, ['ok' => false]);
foreach (['SMTP_USER', 'MAIL_TO'] as $key) if (!filter_var($config[$key] ?? '', FILTER_VALIDATE_EMAIL)) reply(503, ['ok' => false]);
if (empty($config['SMTP_PASS'])) reply(503, ['ok' => false]);

// Atomically reject replays before contacting SMTP. This file is never public.
$ledger = fopen(dirname(__DIR__) . '/biomasschains-relay-nonces.json', 'c+');
if (!$ledger || !flock($ledger, LOCK_EX)) reply(503, ['ok' => false]);
$recent = json_decode(stream_get_contents($ledger) ?: '{}', true) ?: [];
$recent = array_filter($recent, fn($time) => $time > time() - 120);
if (isset($recent[$data['id']])) { flock($ledger, LOCK_UN); fclose($ledger); reply(409, ['ok' => false]); }
if (count($recent) > 1000) { flock($ledger, LOCK_UN); fclose($ledger); reply(429, ['ok' => false]); }
$recent[$data['id']] = time();
rewind($ledger);
ftruncate($ledger, 0);
if (fwrite($ledger, json_encode($recent)) === false || !fflush($ledger)) { flock($ledger, LOCK_UN); fclose($ledger); reply(503, ['ok' => false]); }
flock($ledger, LOCK_UN);
fclose($ledger);

try {
    $stage = 'TLS connection';
    $smtpCode = 0;
    $deadline = microtime(true) + 20;
    $context = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true, 'peer_name' => 'smtp.hostinger.com']]);
    $socket = @stream_socket_client('ssl://smtp.hostinger.com:465', $errno, $error, 8, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) throw new RuntimeException('SMTP TLS unavailable');
    try {
        $expect = function(int $code) use ($socket, $deadline, &$smtpCode): void {
            $total = 0;
            do {
                $remaining = $deadline - microtime(true);
                if ($remaining <= 0) throw new RuntimeException('SMTP timeout');
                stream_set_timeout($socket, (int)ceil($remaining));
                $line = fgets($socket, 2048);
                $smtpCode = $line === false ? 0 : (int)substr($line, 0, 3);
                if ($line === false || ($total += strlen($line)) > 65536 || !preg_match('/^' . $code . '[ -]/', $line)) throw new RuntimeException('SMTP command not accepted');
            } while (($line[3] ?? '') === '-');
        };
        $write = function(string $content) use ($socket): void {
            while ($content !== '') {
                $written = fwrite($socket, $content);
                if ($written === false || $written === 0) throw new RuntimeException('SMTP write failed');
                $content = substr($content, $written);
            }
        };
        $command = function(string $content, int $code, string $nextStage) use ($write, $expect, &$stage): void { $stage = $nextStage; $write($content . "\r\n"); $expect($code); };
        $stage = 'server greeting';
        $expect(220);
        $command('EHLO www.biomasschains.com', 250, 'EHLO');
        $command('AUTH LOGIN', 334, 'authentication start');
        $command(base64_encode($config['SMTP_USER']), 334, 'authentication user');
        $command(base64_encode($config['SMTP_PASS']), 235, 'authentication password');
        $command('MAIL FROM:<' . $config['SMTP_USER'] . '>', 250, 'sender');
        $command('RCPT TO:<' . $config['MAIL_TO'] . '>', 250, 'recipient');
        $command('DATA', 354, 'DATA start');
        $text = "Name: {$data['name']}\nEmail: {$data['email']}\nCompany: {$data['company']}\nPage: {$data['path']}\nIP: {$data['ip']}\nUA: {$data['ua']}\n\nMessage:\n{$data['message']}";
        // Fold encoded words without splitting a UTF-8 character (RFC 2047).
        $parts = []; $part = '';
        foreach (preg_split('//u', 'BiomassChains website enquiry — ' . $data['name'], -1, PREG_SPLIT_NO_EMPTY) as $character) {
            if (strlen($part . $character) > 39) { $parts[] = '=?UTF-8?B?' . base64_encode($part) . '?='; $part = ''; }
            $part .= $character;
        }
        if ($part !== '') $parts[] = '=?UTF-8?B?' . base64_encode($part) . '?=';
        $subject = implode("\r\n ", $parts);
        $message = implode("\r\n", [
            'From: BiomassChains <' . $config['SMTP_USER'] . '>', 'To: <' . $config['MAIL_TO'] . '>',
            'Reply-To: <' . $data['email'] . '>', 'Subject: ' . $subject, 'Date: ' . gmdate('D, d M Y H:i:s +0000'),
            'Message-ID: <' . $data['id'] . '@biomasschains.com>', 'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: base64', '',
            rtrim(chunk_split(base64_encode($text), 76, "\r\n")), '.', '',
        ]);
        $write($message);
        $stage = 'final DATA acceptance';
        $expect(250); // Only Hostinger's final DATA acceptance permits success.
    } finally { fclose($socket); }
    reply(200, ['ok' => true, 'accepted' => true, 'id' => $data['id']]);
} catch (Throwable $failure) {
    error_log('[BiomassChains relay] SMTP delivery was not confirmed.');
    reply(502, ['ok' => false, 'accepted' => false, 'stage' => $stage, 'smtpCode' => $smtpCode]);
}

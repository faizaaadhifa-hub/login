<?php
// =============================================
//  auth_login.php — Proses Login
//  Lokasi: C:/xampp/htdocs/login/auth_login.php
// =============================================

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");         // izinkan request dari web
header("Access-Control-Allow-Methods: POST");

require_once "connect.php";

// Hanya terima method POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Method tidak valid."]);
    exit;
}

// Ambil data dari request (support JSON body maupun form-data)
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$username = trim($data["username"] ?? $_POST["username"] ?? "");
$password =      $data["password"] ?? $_POST["password"] ?? "";

// Validasi input kosong
if (empty($username) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "Username dan password wajib diisi."]);
    exit;
}

// Cari user di database — pakai prepared statement (aman dari SQL Injection)
$stmt = $conn->prepare("SELECT id, nama, username, password FROM users WHERE username = ? LIMIT 1");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["status" => "error", "message" => "Username atau password salah."]);
    exit;
}

$user = $result->fetch_assoc();

// Verifikasi password dengan password_verify (cocok dengan password_hash)
if (!password_verify($password, $user["password"])) {
    echo json_encode(["status" => "error", "message" => "Username atau password salah."]);
    exit;
}

// Login berhasil — kembalikan data user (TANPA password)
echo json_encode([
    "status"   => "success",
    "message"  => "Login berhasil!",
    "user"     => [
        "id"       => $user["id"],
        "nama"     => $user["nama"],
        "username" => $user["username"]
    ]
]);

$stmt->close();
$conn->close();
?>
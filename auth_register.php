<?php
// =============================================
//  auth_register.php — Proses Registrasi
//  Lokasi: C:/xampp/htdocs/login/auth_register.php
// =============================================

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

require_once "connect.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Method tidak valid."]);
    exit;
}

// Ambil data JSON dari body
$raw  = file_get_contents("php://input");
$data = json_decode($raw, true);

$nama     = trim($data["nama"]     ?? $_POST["nama"]     ?? "");
$email    = trim($data["email"]    ?? $_POST["email"]    ?? "");
$username = trim($data["username"] ?? $_POST["username"] ?? "");
$password =      $data["password"] ?? $_POST["password"] ?? "";

// --- Validasi ---
if (empty($nama) || empty($email) || empty($username) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "Semua kolom wajib diisi."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Format email tidak valid."]);
    exit;
}

if (strlen($username) < 3) {
    echo json_encode(["status" => "error", "message" => "Username minimal 3 karakter."]);
    exit;
}

if (strlen($password) < 6) {
    echo json_encode(["status" => "error", "message" => "Password minimal 6 karakter."]);
    exit;
}

// --- Cek username & email sudah ada ---
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Username atau email sudah digunakan."]);
    $stmt->close();
    exit;
}
$stmt->close();

// --- Simpan ke database ---
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (nama, email, username, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nama, $email, $username, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode([
        "status"  => "success",
        "message" => "Akun berhasil dibuat! Silakan login."
    ]);
} else {
    echo json_encode([
        "status"  => "error",
        "message" => "Gagal menyimpan akun. Coba lagi."
    ]);
}

$stmt->close();
$conn->close();
?>
<?php
// Import the required libraries for JWT token generation
require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;
include("connection.php"); 

$conn = new mysqli($servername, $username, $password, $dbname);

$email = $_POST["email"];
$password = $_POST["password"];

$sql = "SELECT u.id, u.type, t.type as user_type FROM users u INNER JOIN user_types t ON u.type = t.id WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
  $row = $result->fetch_assoc();

  // Generate a new JWT token with a secret key and the user ID as payload
  $secret_key = "hello123456";
  $issued_at = time();
  $expires_at = $issued_at + (60 * 60 * 24); // token expires in 24 hours
  $payload = array(
      "user_id" => $row["id"],
      "user_type" => $row["user_type"],
      "issued_at" => $issued_at,
      "expires_at" => $expires_at
  );
  $jwt = JWT::encode($payload, $secret_key, 'HS256');

  // Set the JWT token as a cookie
  setcookie("jwt", $jwt, $expires_at, "/");

 
  if ($row["user_type"] == "patient") {
    header("Location: patient.html");
    exit();
  } elseif ($row["user_type"] == "employee") {
    header("Location: employee.html");
    exit();
  } elseif ($row["user_type"] == "admin") {
    header("Location: admin.html");
    exit();
  }
} else {
  $_SESSION['error_message'] = "Invalid email or password";
  header("Location: login.html");
  exit();
}
?>
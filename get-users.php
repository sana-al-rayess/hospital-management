<?php
$servername = "localhost";
$username = "root";
$password = NULL;
$dbname = "healthcaredb";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name FROM users";
$result = $conn->query($sql);

$users = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $user = array("id" => $row["id"], "name" => $row["name"]);
    array_push($users, $user);
  }
} else {
  echo "0 results";
}

$conn->close();

// Return users as a JSON array
header('Content-Type: application/json');
echo json_encode($users);
?>
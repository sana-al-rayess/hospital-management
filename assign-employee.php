<?php
include("connection.php"); 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$user_id = $_POST["user_id"];
$hospital_id = $_POST["hospital_id"];
$ssn = $_POST["ssn"];
$date_left = $_POST["date_left"];
$date_joined = $_POST["date_joined"];
$position = $_POST["position"];


$sql="INSERT INTO employee_infos (user_id, hospital_id, ssn, position, date_joined, date_left) VALUES ('$user_id', '$hospital_id', '$ssn', '$position', '$date_joined', '$date_left')";


if ($conn->query($sql) === TRUE) {
  $response = ["success" => true, "message" => "New record created successfully"];
  echo json_encode($response);
} else {
  $response = ["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error];
  echo json_encode($response);
}

$conn->close();
?>

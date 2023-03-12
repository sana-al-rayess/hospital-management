<?php
header('Content-Type: application/json'); // add this line to set the response type to JSON

$servername = "localhost";
$username = "root";
$password = Null;
$dbname = "healthcaredb";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $dob = $_POST['dob'];
    $type = $_POST['type'];

    // Prepare and execute the SQL statement to insert the user data into the database
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, dob, type) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", $name, $email, $password, $dob, $type);
    $result = $stmt->execute();

    if ($result) {
        $response = array(
            'status' => 'success',
            'message' => 'User created successfully!'
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error creating user. Please try again later.'
        );
    }

    // Return the response message in JSON format
    header('Content-Type: application/json');
    echo json_encode($response);
}

<?php
include("connection.php"); 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$department_id = $_GET['department_id'];

$sql = "SELECT id, name FROM rooms WHERE department_id=$department_id";
$result = $conn->query($sql);

$rooms = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $room = array("id" => $row["id"], "name" => $row["name"]);
    array_push($rooms, $room);
  }
} else {
  echo "0 results";
}
$conn->close();

echo json_encode($rooms);
?>

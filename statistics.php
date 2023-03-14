<?php
include("connection.php"); 
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT h.name as hospital, COUNT(*) as patient_count
        FROM users u
        INNER JOIN patient_infos pi ON u.id = pi.user_id
        INNER JOIN hospitals h ON u.type = h.id
        GROUP BY u.type";

$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {
    $data = array();
    
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);
} else {
    echo json_encode(array()); 
}
?>

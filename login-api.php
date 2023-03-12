
<?php

$servername = "localhost";
$username = "root";
$password = NULL;
$dbname = "healthcaredb";

$conn = new mysqli($servername, $username, $password, $dbname);
    
    $email = $_POST["email"];
    $password = $_POST["password"];
  
    $sql = "SELECT u.type, t.type as user_type FROM users u INNER JOIN user_types t ON u.type = t.id WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
  
    // if the user exists, set session variables and redirect to appropriate page based on user type
    if ($result->num_rows == 1) {
      $row = $result->fetch_assoc();
      session_start();
      $_SESSION["user_type"] = $row["user_type"];
      $_SESSION["user_id"] = $row["id"];
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


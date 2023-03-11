function login() {
    // retrieve form data
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // set form action to login.php
    document.getElementById("login-form").action = "login-api.php";
  
    // submit form
    document.getElementById("login-form").submit();
  }
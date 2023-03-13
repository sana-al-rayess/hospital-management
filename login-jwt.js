function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    fetch('login-api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('token', data.token);
        
        if (data.user_type === 'patient') {
          window.location.href = 'patient.html';
        } else if (data.user_type === 'employee') {
          window.location.href = 'employee.html';
        } else if (data.user_type === 'admin') {
          window.location.href = 'admin.html';
        }
      } else {
        document.getElementById("error-message").innerHTML = data.message;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
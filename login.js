

function login() {
   
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("login-form").action = "login-api.php";
 
    document.getElementById("login-form").submit();
  }
  
  
  const form = document.getElementById('signup-form');
  const responseMessage = document.createElement('p');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const password = form.elements['password'].value;
      const dob = form.elements['dob'].value;
      const type = form.elements['type'].value;

      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('password', password);
      data.append('dob', dob);
      data.append('type', type);

      fetch('signup-api.php', {
          method: 'POST',
          body: data
      })
      .then(response => response.json())
      .then(data => {
          responseMessage.textContent = data.message;
          if(data.status === 'success') {
              responseMessage.style.color = 'green';
          } else {
              responseMessage.style.color = 'red';
          }
          form.appendChild(responseMessage);
      })
      .catch(error => {
          responseMessage.textContent = 'An error occurred. Please try again.';
          responseMessage.style.color = 'red';
          form.appendChild(responseMessage);
      });
  });
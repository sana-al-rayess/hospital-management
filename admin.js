function loadHospitals() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'hospital-list.php');
    xhr.onload = function() {
      if(xhr.status === 200) {
        const hospitals = JSON.parse(xhr.responseText);
        const dropdown = document.getElementById("hospital-dropdown");
        hospitals.forEach(hospital => {
          const option = document.createElement("option");
          option.text = hospital.name;
          option.value = hospital.id;
          dropdown.add(option);
        });
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  function loadDepartments() {
    const xhr = new XMLHttpRequest();
    const hospitalId = document.getElementById("hospital-dropdown").value;
    xhr.open('GET', `get_departments.php?hospital_id=${hospitalId}`);
    xhr.onload = function() {
      if(xhr.status === 200) {
        const departments = JSON.parse(xhr.responseText);
        const dropdown = document.getElementById("department-dropdown");
        dropdown.innerHTML = "";
        departments.forEach(department => {
          const option = document.createElement("option");
          option.text = department.name;
          option.value = department.id;
          dropdown.add(option);
        });
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.send();
  }


function getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get-users.php');
    xhr.onload = function() {
      if(xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        const dropdown = document.getElementById("user-dropdown");
        users.forEach(user => {
          const option = document.createElement("option");
          option.text = user.name;
          option.value = user.id;
          dropdown.add(option);
        });
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.send();
  }
  
  function assignPatient() {
    const userId = document.getElementById("user-dropdown").value;
    const hospitalId = document.getElementById("hospital-dropdown").value;
    const dateJoined = document.getElementById("date-joined").value;
    const dateLeft = document.getElementById("date-left").value;
    const isActive = document.getElementById("active-dropdown").value;
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "assign-hosp.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const message = document.getElementById("message");
        message.innerHTML = response.message;
      } else {
        console.log("Error: " + xhr.status);
      }
    };
    const params =
      "user_id=" +
      userId +
      "&hospital_id=" +
      hospitalId +
      "&date_joined=" +
      dateJoined +
      "&date_left=" +
      dateLeft +
      "&is_active=" +
      isActive;
    xhr.send(params);
  }
  function getEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'get-employees.php');
    xhr.onload = function() {
      if(xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        const dropdown = document.getElementById("user-dropdown");
        users.forEach(user => {
          const option = document.createElement("option");
          option.text = user.name;
          option.value = user.id;
          dropdown.add(option);
        });
      } else {
        console.log('Error: ' + xhr.status);
      }
    };
    xhr.send();
  }
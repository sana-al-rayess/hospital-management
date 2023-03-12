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
  
  
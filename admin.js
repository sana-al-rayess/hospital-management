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
  
  
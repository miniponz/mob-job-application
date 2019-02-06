const circusForm = document.getElementById('circus-app');
const userName = document.getElementById('name');
const jobPosition = document.getElementById('position');
const allergy = document.getElementById('allergy');
const allergySpan = document.getElementById('allergy-slider');
//const elephantsYes = document.getElementById('yes');
//const elephantsNo = document.getElementById('no');



allergy.addEventListener('change', function() {
    allergySpan.textContent = allergy.value;
});

circusForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const tigerNames = [];

    for(let index = 0; index < circusForm.tiger.length; index++) {
        const name = circusForm.tiger[index];
        if(name.checked) {
            tigerNames[index] = name.value;
        }
    }

    /*var elephants;
    if(elephantsYes.checked) {
        elephants = elephantsYes.value;
    }
    else if(elephantsNo.checked) {
        elephants = elephantsNo.value;
    } 
  
    console.log(elephants);*/

    const applicant = {
        name: userName.value,
        position: jobPosition.value,
        allergy: allergy.value,
        tigerName: tigerNames,
        //elephants: elephants.value
    };

    window.location = 'thanks.html';

    const serialize = JSON.stringify(applicant);
    //turn applicant object into JSON format
    window.localStorage.setItem('applicant', serialize);
    //send JSON version of applicant object to local storage.

});



const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tigerNames = document.getElementById('tiger-names');
const elephants = document.getElementById('elephants');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
if(jsonString){
    const applicants = JSON.parse(jsonString);
    applicant = applicants[applicants.length - 1];
}
else {
    window.location = '/';
}





name.textContent = applicant.name;
position.textContent = applicant.position;
allergy.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerName.join(' ');
elephants.textContent = applicant.elephants;


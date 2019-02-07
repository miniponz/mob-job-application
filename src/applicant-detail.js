const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tigerNames = document.getElementById('tiger-names');
const elephants = document.getElementById('elephants');

const jsonString = window.localStorage.getItem('applicants');

let applicant = null;
let applicants = [];
if(jsonString){
    applicants = JSON.parse(jsonString);
    //applicant = applicants[applicants.length - 1];
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
//looks for key, gives value but returns what was clicked from the table.
const nameToFind = searchParam.get('name'); 

for(let index = 0; index < applicants.length; index++){
    let currentApplicant = applicants[index];

    if(currentApplicant.name === nameToFind){
        applicant = currentApplicant;
        //break stops the loop once the condition above is met.
        break;
    }
}




console.log(nameToFind);





name.textContent = applicant.name;
position.textContent = applicant.position;
allergy.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerName.join(' ');
elephants.textContent = applicant.elephants;


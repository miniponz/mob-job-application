const jsonString = window.localStorage.getItem('applicants');

let applicants = [];

if(jsonString){
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tdName.textContent = applicant.name;
    tr.appendChild(tdName);

    const tdPosition = document.createElement('td');
    tdPosition.textContent = applicant.position;
    tr.appendChild(tdPosition);
    
    const tdAllergy = document.createElement('td');
    tdAllergy.textContent = applicant.allergy;
    tr.appendChild(tdAllergy);

    const tdTigerNames = document.createElement('td');
    tdTigerNames.textContent = applicant.tigerName.join(' ');
    tr.appendChild(tdTigerNames);


    
    
}
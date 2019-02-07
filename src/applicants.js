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
    const link = document.createElement('a'); // created link element
    tr.appendChild(tdName);
    tdName.appendChild(link);
    link.textContent = applicant.name; //added text to our link 
    link.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.name); // setting href attribute on our link to the applicant-detail.html page and adding a query string (starts '?name=') with a key of name and value of string name.
    //use encodeURIComponent a)escapes characters that can't be in a URL and adds name to URL


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
const circusForm = document.getElementById('circus-app');
const userName = document.getElementById('name');
const jobPosition = document.getElementById('position');
const allergy = document.getElementById('allergy');
const allergyDisplay = document.getElementById('allergy-slider');
const yesElephants = document.getElementById('yes');
const noElephants = document.getElementById('no');

allergy.addEventListener('change', function(){
    allergyDisplay.textContent = allergy.value;
});
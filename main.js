document.querySelector('.viewWelcome').classList.add('show');
document.querySelector('.viewGame').classList.add('hidden');
let getForm = document.getElementById('form-box');
let getInputText = document.getElementById('inputName');

getForm.addEventListener('submit', getNameUser);
function getNameUser(e) {
    e.preventDefault();
    let nameUser = getInputText.value;
    console.log(nameUser);
}
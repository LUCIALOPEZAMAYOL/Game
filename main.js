document.querySelector('.viewWelcome').classList.add('show');
document.querySelector('.viewGame').classList.add('hidden');
let getForm = document.getElementById('form-box');
let getInputText = document.getElementById('inputName');
let getElementNameText = document.getElementById('name-text');
const getBtnSalir = document.getElementById('salir');

getForm.addEventListener('submit', getNameUser);
function getNameUser(e) {
    e.preventDefault();
    let nameUser = getInputText.value;
    showNameUserInGame(nameUser);
    addRemoveClassShowHideBtnIngresar();
}

function addRemoveClassShowHideBtnIngresar() {
    document.querySelector('.viewWelcome').classList.remove('show');
    document.querySelector('.viewWelcome').classList.add('hidden');
    document.querySelector('.viewGame').classList.remove('hidden');
    document.querySelector('.viewGame').classList.add('show');
}

function showNameUserInGame(name) {
    getElementNameText.innerText = `Hola ${name}!! diviértete jugando`
}

getBtnSalir.addEventListener('click', funcionSalir);

function funcionSalir() {
    location.reload();
}
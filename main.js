document.querySelector('.viewWelcome').classList.add('show');
document.querySelector('.viewGame').classList.add('hidden');
let getForm = document.getElementById('form-box');
let getInputText = document.getElementById('inputName');
let getElementNameText = document.getElementById('name-text');
const getBtnSalir = document.getElementById('salir');
const getBtnRock = document.getElementById('rock');
const getBtnPaper = document.getElementById('paper');
const getBtnScissors = document.getElementById('scissors');
const piedra = "PIEDRA";
const papel = "PAPEL";
const tijera = "TIJERA";
let getImgUser = document.getElementById('img-user');

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

getBtnRock.addEventListener('click', btnRock);
getBtnPaper.addEventListener('click', btnPaper);
getBtnScissors.addEventListener('click', btnScissors);

function btnRock() {
    getImgUser.src = "./assets/PIEDRA.png";
}

function btnPaper() {
    getImgUser.src = "./assets/PAPEL.png";
}

function btnScissors() {
    getImgUser.src = "./assets/TIJERA.png";
}


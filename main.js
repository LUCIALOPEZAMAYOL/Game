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
let getImgMachine = document.getElementById('img-machine');
let getResultText = document.getElementById('p-result');
let getImgResult = document.getElementById('img-result');

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
    getImgUser.src = "./assets/"+ piedra + ".png";
    ResultGame(piedra);
}

function btnPaper() {
    getImgUser.src = "./assets/"+ papel + ".png";
    ResultGame(papel);
}

function btnScissors() {
    getImgUser.src = "./assets/"+ tijera + ".png";
    ResultGame(tijera);
}

function ResultGame(userOption) {
    let machineOption = calcOptionMachine();
    if(userOption===machineOption){
        getResultText.innerText = "Empates";
        getImgResult.src = "./assets/EMPATE.gif";
    }
    else if(userOption===piedra && machineOption===tijera || userOption===papel && machineOption===piedra || userOption===tijera && machineOption===papel){
        getResultText.innerText = "Ganaste";
        getImgResult.src = "./assets/GANAR.gif";
    }
    else if(userOption===piedra && machineOption===papel || userOption===papel && machineOption===tijera || userOption===tijera && machineOption===piedra){
        getResultText.innerText = "Perdiste";
        getImgResult.src = "./assets/PERDER.gif";
    }
}

function calcOptionMachine() {
    let ramdonOption = Math.floor((Math.random()*3));
    let valueMachine;
    switch (ramdonOption) {
        case 0:
            valueMachine = piedra;
            break;
        case 1:
            valueMachine = papel;
            break;
        case 2:
            valueMachine = tijera;
            break;
        default:
            break;
    }
    return valueMachine;
}
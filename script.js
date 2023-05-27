const sectionChoosePlayer = document.querySelector(".choose-player");
const sectionMainContent = document.querySelector(".main-content");

const divPlayer1 = document.querySelector("#player-1");
const divPlayer2 = document.querySelector("#player-2");

const btnStartGame = document.querySelector("#start-game-btn");
const btnPlayer1 = document.querySelector("#player-1-btn");
const btnPlayer2 = document.querySelector("#player-2-btn");
const btnBot1 = document.querySelector("#bot-1-btn");
const btnBot2 = document.querySelector("#bot-2-btn");

btnStartGame.addEventListener("click", startGame);

btnPlayer1.addEventListener("click", player1Choose);
btnPlayer2.addEventListener("click", player2Choose);
btnBot1.addEventListener("click", chooseBot1);
btnBot2.addEventListener("click", chooseBot2);

sectionChoosePlayer.style.display = "flex";
sectionMainContent.style.display = "none";

const Player = (name, img) => {
    let points = 0;
    const getName = () => name;
    const getImg = () => img;
}


function startGame(){
    sectionChoosePlayer.style.display = "none";
    sectionMainContent.style.display = "flex";
}

function player1Choose(){
    divPlayer1.innerHTML = `
        <img class="cross-image" src="./assets/cruz2.png" alt=""> 
        <input type="text" placeholder="Player 1">
        `
}

function player2Choose(){
    divPlayer2.innerHTML = `
        <img class="circle-image" src="./assets/Circulo.png" alt=""> 
        <input type="text" placeholder="Player 2">
        `
}

function chooseBot1(){
    divPlayer1.innerHTML = `
        <img class="cross-image" src="./assets/cruz2.png" alt=""> 
        <input type="text" placeholder="Bot">
        `
}
function chooseBot2(){
    divPlayer2.innerHTML = `
        <img class="circle-image" src="./assets/Circulo.png" alt=""> 
        <input type="text" placeholder="Bot">
        `
}
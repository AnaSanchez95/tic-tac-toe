const sectionChoosePlayer = document.querySelector(".choose-player");
const sectionMainContent = document.querySelector(".main-content");

const divPlayerCross = document.querySelector("#player-1");
const divPlayerCircle = document.querySelector("#player-2");

const btnStartGame = document.querySelector("#start-game-btn");

const btnPlayer1 = document.querySelector("#player-1-btn");
const btnPlayer2 = document.querySelector("#player-2-btn");
const btnBot1 = document.querySelector("#bot-1-btn");
const btnBot2 = document.querySelector("#bot-2-btn");


btnStartGame.addEventListener("click", startGame);

btnPlayer1.addEventListener("click", () => playerCross("Player-1"));
btnPlayer2.addEventListener("click", () => playerCircle("Player-2"));
btnBot1.addEventListener("click", () => playerCross("Bot-1"));
btnBot2.addEventListener("click", () => playerCircle("Bot-2"));



const Player = (name, img) => {
    let points = 0;
    const getName = () => name;
    const getImg = () => img;
}

function game(){
    sectionChoosePlayer.style.display = "flex";
    sectionMainContent.style.display = "none";
    btnStartGame.disabled = true;
}

function startGame(){
    sectionChoosePlayer.style.display = "none";
    sectionMainContent.style.display = "flex";

}

function playerCross(player){
    divPlayerCross.innerHTML = `
        <img class="cross-image" src="./assets/cruz2.png" alt=""> 
        <input type="text" placeholder="${player}" id="${player}">
        `
}

function playerCircle(player){
    divPlayerCircle.innerHTML = `
        <img class="cross-image" src="./assets/cruz2.png" alt=""> 
        <input type="text" placeholder="${player}" id="${player}">
        `
}

game();
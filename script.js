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



const player = (name, img) => {
    let points = 0;
    const getName = () => name;
    const getImg = () => img;
    return{ getName }
}

const Gameboard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""]
}
) ()

function game(){
    sectionChoosePlayer.style.display = "flex";
    sectionMainContent.style.display = "none";
    btnStartGame.disabled = true;
}

function startGame(){
    sectionChoosePlayer.style.display = "none";
    sectionMainContent.style.display = "flex";

    const crossPlayer = document.querySelector("#crossPlayer").value;
    const circlePlayer = document.querySelector("#circlePlayer").value;

   const player1 = player(crossPlayer, "./assets/cruz2.png");
   const player2 =  player(circlePlayer, "./assets/Circulo.png");
   console.log(player1.getName());
}

function playerCross(player){
    divPlayerCross.innerHTML = `
        <img class="cross-image" src="./assets/cruz2.png" alt=""> 
        <input type="text"  id="crossPlayer" value="${player}">
        `
        btnStartGame.disabled = false;    
}

function playerCircle(player){
    divPlayerCircle.innerHTML = `
        <img class="cross-image" src="./assets/Circulo.png" alt=""> 
        <input type="text"  id="circlePlayer" value="${player}">        
        `
        btnStartGame.disabled = false;
}



game();
const sectionChoosePlayer = document.querySelector(".choose-player");
const sectionMainContent = document.querySelector(".main-content");

const divPlayerCross = document.querySelector("#player-1");
const divPlayerCircle = document.querySelector("#player-2");

const btnStartGame = document.querySelector("#start-game-btn");

const btnPlayer1 = document.querySelector("#player-1-btn");
const btnPlayer2 = document.querySelector("#player-2-btn");
const btnBot1 = document.querySelector("#bot-1-btn");
const btnBot2 = document.querySelector("#bot-2-btn");

let gameBoard = ["", "", "", "", "", "", "", "", ""];

const gameSquares = document.querySelectorAll('.game-square');

let currentPlayer = null;
let player1 = null;
let player2 = null;

btnStartGame.addEventListener("click", startGame);

btnPlayer1.addEventListener("click", () => playerCross("Player-1"));
btnPlayer2.addEventListener("click", () => playerCircle("Player-2"));
btnBot1.addEventListener("click", () => playerCross("Bot-1"));
btnBot2.addEventListener("click", () => playerCircle("Bot-2"));

gameSquares.forEach((square) =>{
    square.addEventListener('click', () => boxChoosen(square, currentPlayer));
})

const player = (name, image) => {
    let points = 0;
    const getName = () => name;
    const getImage = () => image;
    return{ getName, getImage }
}

const Gameboard = (() => {
    
    return(gameBoard);
}
) ()

function playGame(){
    if(gameBoard[0] === gameBoard[1] & gameBoard[1] === gameBoard[2] & gameBoard[2] != ""){
        console.log(`${gameBoard[0]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[0] === gameBoard[3] & gameBoard[3] === gameBoard[6] & gameBoard[6] != ""){
        console.log(`${gameBoard[0]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[0] === gameBoard[4] & gameBoard[4] === gameBoard[8] & gameBoard[8] != ""){
        console.log(`${gameBoard[0]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[1] === gameBoard[4] & gameBoard[4] === gameBoard[7] & gameBoard[7] != ""){
        console.log(`${gameBoard[1]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[0] === gameBoard[3] & gameBoard[3] === gameBoard[6] & gameBoard[6] != ""){
        console.log(`${gameBoard[0]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[2] === gameBoard[5] & gameBoard[5] === gameBoard[8] & gameBoard[8] != ""){
        console.log(`${gameBoard[2]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[2] === gameBoard[4] & gameBoard[4] === gameBoard[6] & gameBoard[6] != ""){
        console.log(`${gameBoard[2]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[3] === gameBoard[4] & gameBoard[4] === gameBoard[5] & gameBoard[5] != ""){
        console.log(`${gameBoard[3]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
    else if(gameBoard[6] === gameBoard[7] & gameBoard[7] === gameBoard[8] & gameBoard[8] != ""){
        console.log(`${gameBoard[6]} gana`);
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
    }
}

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

   player1 = player(crossPlayer, "./assets/cruz2.png");
   player2 =  player(circlePlayer, "./assets/Circulo.png");

   console.log(player1.getName(), player2.getName());
   currentPlayer = player1;
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

function boxChoosen(square, player){
    square.innerHTML = `<img class="image-board" src="${player.getImage()}" alt=""></img>`;    
    const squareId = square.id;
    console.log(squareId);
    
    if (currentPlayer.getImage() === "./assets/cruz2.png"){
        currentPlayer = player2;
        gameBoard[squareId] = "x";
    }
    else {
        currentPlayer = player1;
        gameBoard[squareId] = "o";
    }
    square.style.pointerEvents = "none";
    console.log(gameBoard);
    playGame()
}

game();
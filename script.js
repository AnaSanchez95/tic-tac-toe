const sectionChoosePlayer = document.querySelector(".choose-player");
const sectionMainContent = document.querySelector(".main-content");
const sectionRoundWinner = document.querySelector(".round-winner");

const divPlayerCross = document.querySelector("#player-1");
const divPlayerCircle = document.querySelector("#player-2");

const btnStartGame = document.querySelector("#start-game-btn");

const btnPlayer1 = document.querySelector("#player-1-btn");
const btnPlayer2 = document.querySelector("#player-2-btn");
const btnBot1 = document.querySelector("#bot-1-btn");
const btnBot2 = document.querySelector("#bot-2-btn");

let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playersScore = document.querySelector(".score-players");
let player1Score = document.createElement("p");
let player2Score = document.createElement("p");

const gameSquares = document.querySelectorAll('.game-square');

let currentPlayer = null;
let player1  = null;
let player2 = null;

let winner;

btnStartGame.addEventListener("click", startGame);

btnPlayer1.addEventListener("click", () => playerCross("Player-1"));
btnPlayer2.addEventListener("click", () => playerCircle("Player-2"));
btnBot1.addEventListener("click", () => playerCross("Bot-1"));
btnBot2.addEventListener("click", () => playerCircle("Bot-2"));



const player = (name, image, marker) => {
    let points = 0;
    const getMarker = () => marker;
    const getName = () => name;
    const getImage = () => image;
    return{ getName, getImage, points, getMarker }
}

const game1 = (() => {
    sectionChoosePlayer.style.display = "flex";
    sectionMainContent.style.display = "none";
    sectionRoundWinner.style.display = "none";
    btnStartGame.disabled = true;
}
)()

function startGame(){
    sectionChoosePlayer.style.display = "none";
    sectionMainContent.style.display = "flex";

    const crossPlayer = document.querySelector("#crossPlayer").value;
    const circlePlayer = document.querySelector("#circlePlayer").value;

   player1 = player(crossPlayer, "./assets/cruz2.png", "x");
   player2 =  player(circlePlayer, "./assets/Circulo.png", "o");

   currentPlayer = player1;
   game();
   showScore();
}

function gameRound(){
    sectionRoundWinner.style.display = "none";
    checkGameWinner();
    gameSquares.forEach((square) =>{
    square.addEventListener('click', () => boxChoosen(square));
    })
    
}

function checkRoundWinner(){
    if(gameBoard[0] === gameBoard[1] & gameBoard[1] === gameBoard[2] & gameBoard[2] != ""){
        
        gameSquares.forEach((square) =>{
            square.style.pointerEvents = "none";
        })
        winner = whatPlayer(gameBoard[0]);
        checkGameWinner(winner);        
        winner.points += 1;
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
    changeScore();      
}

function game(){    
    gameRound();
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

function boxChoosen(square){
    square.innerHTML = `<img class="image-board" src="${currentPlayer.getImage()}" alt=""></img>`;    
    const squareId = square.id;
    gameBoard[squareId] = currentPlayer.getMarker();

    changeCurrentPlayer();
   
    square.style.pointerEvents = "none";
    console.log(gameBoard);
    checkRoundWinner();

function whatPlayer(marker){
    if(marker === "x"){
        return player1;
    }
    else{
        return player2;
    }
}

function showScore(){

    player1Score.innerText = `${player1.getName()} : ${player1.points}`;
    player2Score.innerText = `${player2.getName()} : ${player2.points}`;

    playersScore.appendChild(player1Score);
    playersScore.appendChild(player2Score);
}

function changeScore(){
    player1Score.innerText = `${player1.getName()} : ${player1.points}`;
    player2Score.innerText = `${player2.getName()} : ${player2.points}`;
}

function changeCurrentPlayer(){
    if (currentPlayer.getImage() === "./assets/cruz2.png"){
        currentPlayer = player2;        
    }
    else{
        currentPlayer = player1;
    }
}

function showRoundWinner(player){    
    sectionRoundWinner.style.display = "flex";
    const pWinner = document.getElementById("winner");
    pWinner.innerText = `${player.getName()} wins this round!`;
    sectionRoundWinner.appendChild(pWinner);
    clearBoard();
    changeCurrentPlayer();
    setTimeout(() => sectionRoundWinner.style.display = "none", 1000);
}

function showGameWinner(player){
    sectionRoundWinner.style.display = "flex";
    const pWinner = document.getElementById("winner");
    pWinner.innerText = `${player.getName()} wins the game!`;
    sectionRoundWinner.appendChild(pWinner);
}

function checkGameWinner(winner){
    if(player1.points === 3){
        showGameWinner(player1);
    }
    else if(player2.points === 3 ){
        showGameWinner(player2);
    }
    else{
        showRoundWinner(winner);
    }
}

function clearBoard(){
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameSquares.forEach((square) =>{
        square.innerText = null;
        square.style.pointerEvents = "auto";
    })
}
}
let playerPoint = 0;
let computerPoint = 0;
const rps = ["Rock", "Paper", "Scissors"];   //Array consisting of the choices

//Computer's Choice

function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)];   //Returns a random element of the rps array
}

//Player's Choice

function getPlayerChoice() {
    let playerChoice = prompt("Select an option --> 1. Rock 2. Paper 3. Scissors: ");

    if (playerChoice == 1) {
        return "Rock";
    } else if (playerChoice == 2) {
        return "Paper";
    } else if (playerChoice == 3) {
        return "Scissors";
    } else {
        return alert("Enter a valid number");
    }
}

//Game of Death

function playRound(playerSelection, computerSelection) {
    console.log("You selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);

    if (playerSelection === rps[0] && computerSelection === rps[2]) {
        playerPoint = playerPoint + 1;
        return "You won!";
    } else if (playerSelection === rps[1] && computerSelection === rps[0]) {
        playerPoint = playerPoint + 1;
        return "You won!";
    } else if (playerSelection === rps[2] && computerSelection === rps[1]) {
        playerPoint = playerPoint + 1;
        return "You won!";
    } else if (playerSelection === rps[0] && computerSelection === rps[0]) {
        return "Draw";
    }   else if (playerSelection === rps[1] && computerSelection === rps[1]) {
        return "Draw";
    }   else if (playerSelection === rps[2] && computerSelection === rps[2]) {
        return "Draw";
    } else {
        computerPoint = computerPoint + 1;
        return "You lose";
    }
}

// 5 Round Game

function play() {
    let count = 0;

    while (count < 5) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log("scoreboard: " + playerPoint + "-" + computerPoint); 

        count++;
    }

    if (playerPoint > computerPoint) {
        console.log("Player won the tournament!");
    } else if (playerPoint === computerPoint) {
        console.log("The tournament is draw!");
    } else {
        console.log("Computer won the tournament!");
    }
}

play();
let playerPoint = 0;
let computerPoint = 0;
let result = "";
const rps = ["Rock", "Paper", "Scissors"];

//Computer's Choice
function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)];
}

//Updates The Current Score
function updatePlayerPoint() {
    document.getElementById("playerPoints").textContent = playerPoint;
}
function updateCpuPoint() {
    document.getElementById("cpuPoints").textContent = computerPoint;
}

//Game Status
function gameStatus(result) {
    document.getElementById("status").textContent = result;
}

function winner(result) {
    document.getElementById("winner").textContent = result;
}

function previousResult(result) {
    document.getElementById("previousResult").textContent = result;
    let colored = document.getElementById("previousResult");
    colored.style.color = "red";
}


//Game Logic
function playRound(playerSelection, computerSelection) {

    //Player wins
    if (playerSelection === rps[0] && computerSelection === rps[2]) {
        playerPoint++;
        gameStatus("AI selected: Scissors. You won!");
        updatePlayerPoint();
    } else if (playerSelection === rps[1] && computerSelection === rps[0]) {
        playerPoint++;
        gameStatus("AI selected: Rock. You won!");
        updatePlayerPoint();
    } else if (playerSelection === rps[2] && computerSelection === rps[1]) {
        playerPoint++;
        gameStatus("AI selected: Paper. You won!");
        updatePlayerPoint();

    //Draw
    } else if (playerSelection === rps[0] && computerSelection === rps[0]) {
        playerPoint += 0.5;
        computerPoint += 0.5;
        gameStatus("AI also selected: Rock. It's a draw.");
        updatePlayerPoint();
        updateCpuPoint();
    } else if (playerSelection === rps[1] && computerSelection === rps[1]) {
        playerPoint += 0.5;
        computerPoint += 0.5;
        gameStatus("AI also selected: Paper. It's a draw.");
        updatePlayerPoint();
        updateCpuPoint();
    } else if (playerSelection === rps[2] && computerSelection === rps[2]) {
        playerPoint += 0.5;
        computerPoint += 0.5; 
        gameStatus("AI also selected: Scissors. It's a draw.");
        updatePlayerPoint();
        updateCpuPoint();

    //CPU wins
    } else if (playerSelection === rps[2] && computerSelection === rps[0]) {
        computerPoint++;
        document.getElementById("cpuPoints").textContent = computerPoint;
        gameStatus("AI selected: Rock. CPU won!");
    } else if (playerSelection === rps[0] && computerSelection === rps[1]) {
        computerPoint++;
        document.getElementById("cpuPoints").textContent = computerPoint;
        gameStatus("AI selected: Paper. CPU won!");
    } else if (playerSelection === rps[1] && computerSelection === rps[2]) {
        computerPoint++;
        document.getElementById("cpuPoints").textContent = computerPoint;
        gameStatus("AI selected: Scissors. CPU won!");

    } else {
        gameStatus("ERROR");
    }

    //Result after 5 rounds
    if (playerPoint >= 5) {
        winner(`Congratulations! You've won!!`);
        previousResult(`result: ${playerPoint} - ${computerPoint}`);
        playerPoint = 0;
        computerPoint = 0;
        updatePlayerPoint();
        updateCpuPoint();
    } else if (computerPoint >= 5) {
        winner("the AI has won. Try again?");
        previousResult(`result: ${playerPoint} - ${computerPoint}`);
        playerPoint = 0;
        computerPoint = 0;
        updatePlayerPoint();
        updateCpuPoint();
    } else if (playerPoint >= 5 && computerPoint >= 5) {
        playerPoint = 0;
        computerPoint = 0;
        updatePlayerPoint();
        updateCpuPoint();
        winner("The round is a draw");
        previousResult(`result: ${playerPoint} - ${computerPoint}`);
    }

    if (playerPoint >= 0.5 || computerPoint >= 0.5) {
        winner("");
        previousResult("");
    }
}

//USER INTERFACE
let btn1 = document.getElementById('rock');
let btn2 = document.getElementById('paper');
let btn3 = document.getElementById('scissors');

btn1.addEventListener("click", function(e) {
    let playerSelection = rps[0];
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

btn2.addEventListener("click", function(e) {
    let playerSelection = rps[1];
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

btn3.addEventListener("click", function(e) {
    let playerSelection = rps[2];
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
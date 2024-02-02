console.log("Hello World");

function getComputerChoice() {
//algorithm to get random string output
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        choice = "rock";
    }
    else if (random === 2) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let pSelect = playerSelection.toLowerCase;
    
    if (playerSelection == 'rock' 
    && computerSelection == 'paper') {
        message = "You Lose! Paper beats Rock";
    }
    else if (playerSelection == 'rock' 
    && computerSelection == 'scissors') {
        message = "You Win! Rock beats Scissors";
    } 
    else if (playerSelection == 'paper' 
    && computerSelection == 'scissors') {
        message = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == 'paper' 
    && computerSelection == 'rock') {
        message = "You Win! Paper beats Rock";
    } 
    else if (playerSelection == 'scissors' 
    && computerSelection == 'rock') {
        message = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == 'scissors' 
    && computerSelection == 'paper') {
        message = "You Win! Scissors beats Paper";
    }
    else message = "It's a tie"
    return message
}
const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

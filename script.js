console.log("Hello World");
let pScore = 0;
let cScore = 0;

console.log(playGame())

function getComputerChoice() {
//function to get random rock, paper or scissors output
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
   //function to compare player and computer choices and output the results.

    let pSelect = playerSelection.toLowerCase();

    if (pSelect == 'rock' 
    && computerSelection == 'paper') {
        message = "You Lose! Paper beats Rock";
    }
    else if (pSelect == 'rock' 
    && computerSelection == 'scissors') {
        message = "You Win! Rock beats Scissors";
    } 
    else if (pSelect == 'paper' 
    && computerSelection == 'scissors') {
        message = "You Lose! Scissors beats Paper";
    }
    else if (pSelect == 'paper' 
    && computerSelection == 'rock') {
        message = "You Win! Paper beats Rock";
    } 
    else if (pSelect == 'scissors' 
    && computerSelection == 'rock') {
        message = "You Lose! Rock beats Scissors";
    }
    else if (pSelect == 'scissors' 
    && computerSelection == 'paper') {
        message = "You Win! Scissors beats Paper";
    }
    else message = "It's a tie"
    return "You: " + pSelect + " Computer: " +computerSelection + "\n"+ 
    message
}

function playGame() {
    let playerSelection = prompt("Type rock, paper or scissors");
    let computerSelection = getComputerChoice();
    let pSelect = playerSelection.toLowerCase();
    let winner = playRound(playerSelection, computerSelection).match("Win");
    let loser = playRound(playerSelection, computerSelection).match("Lose");
    let tie = playRound(playerSelection, computerSelection).match("tie");
    console.log("Player Score = " +pScore)
    console.log("Computer Score = " +cScore)

    if (winner=="Win") {        
        pScore++;
        console.log("You: " + pSelect + " Computer: " +computerSelection + "\n" + 
        message + "\n" + 'Your points =' + pScore + ' Computer points =' +cScore);
        if (pScore>=3) {
            return console.log("You win the game!") 
        }
        else { 
        playGame()
        }
    }
    else if (loser=="Lose") {
        cScore++;
        console.log("You: " + pSelect + " Computer: " +computerSelection + "\n" + 
        message + "\n" + 'Your points =' + pScore + ' Computer points =' +cScore);
        if (cScore>=3) {
            return console.log("You lose the game!") 
        }
        else { 
        playGame()
        }
    }
    else if (tie=="tie") {
        console.log("You: " + pSelect + " Computer: " +computerSelection + "\n" + 
        message + "\n" + 'Your points =' + pScore + ' Computer points =' +cScore);
        playGame()
    }   
    else {
        playGame()
    }
    
}



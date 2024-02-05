console.log("Hello World");
let pScore = 0;
let cScore = 0;

//message.textContent= finalMessage
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


let rock = document.querySelectorAll('button.rock')
let paper = document.querySelectorAll('button.paper')
let scissors = document.querySelectorAll('button.scissors')
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    let playerSelection = button.id
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        let pSelect = playerSelection.toLowerCase();
        let winner = playRound(playerSelection, computerSelection).match("Win");
        let loser = playRound(playerSelection, computerSelection).match("Lose");
        let text = document.getElementById("text");
        let winnerText = document.getElementById("winnerText");

        if (winner == "Win") {  
                
            pScore++;
            player.textContent= "Player Score = " +pScore;
            computer.textContent= "Computer Score = " +cScore;
            text.textContent = "You: " + pSelect + " Computer: " + computerSelection + "\n" + 
                                  message;
            if (pScore >= 3) {
            winnerText.textContent ="You win the game!";
            }
        }   
        else if (loser == "Lose") {
          
            cScore++;
            player.textContent= "Player Score = " +pScore;
            computer.textContent= "Computer Score = " +cScore;
            text.textContent = "You: " + pSelect + " Computer: " + computerSelection + "\n" + 
                                  message;
            if (cScore >= 3) {
                winnerText.textContent ="You lose the game!";
            }
        }
        else {
            player.textContent= "Player Score = " +pScore;
            computer.textContent= "Computer Score = " +cScore;
            text.textContent = "You: " + pSelect + " Computer: " + computerSelection + "\n" + 
                                  message ;
        }
});
});
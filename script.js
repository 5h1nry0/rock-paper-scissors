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


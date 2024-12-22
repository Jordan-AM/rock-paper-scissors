const max = 3
const min = 1
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {  
    let choice = (Math.floor(Math.random() * (max - min) + min) - Math.floor(Math.random() * (max - min))    )
    return choices[choice]
}

function getHumanChoice() {
    let choice = prompt("Choose between [rock], [paper] or [scissors]: ").toLowerCase()
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won, ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You won, ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won, ${humanChoice} beats ${computerChoice}`);
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`You lost, ${humanChoice} loses to ${computerChoice}`);
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lost, ${humanChoice} loses to ${computerChoice}`);
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`You lost, ${humanChoice} loses to ${computerChoice}`);
    }
}
const max = 3
const min = 1
const choices = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
let drawScore = 0

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
        drawScore += 1
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
    }
    if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
    }
}

function playGame() {
    let rounds = prompt("How many times would you like to play?")
    for (let i = 0; i < rounds; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {
        console.log(`Human:${humanScore} | Computer:${computerScore} | Draw:${drawScore}\nThe human have won!`);
    }
    else if (humanScore < computerScore) {
        console.log(`Human:${humanScore} | Computer:${computerScore} | Draw:${drawScore}\nThe computer have won!`);
    }
    else if (humanScore === computerScore) {
        console.log(`Human:${humanScore} | Computer:${computerScore} | Draw:${drawScore}\nIt's a draw between human and computer!`);
    }
}

playGame()
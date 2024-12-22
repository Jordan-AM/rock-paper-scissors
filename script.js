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
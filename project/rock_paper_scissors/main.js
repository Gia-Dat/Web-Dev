let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let randNum = Math.random()
    if (randNum < 1 / 3) return "rock"
    else if (randNum >= 1 / 3 && randNum < 2 / 3) return "paper"
    else return "scissors"
}

function getHumanChoice() {
    let userInput = prompt("Your play: ")
    return userInput.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1
            return "You win! " + humanChoice + " beats " + computerChoice
        } else if (computerChoice === "paper") {
            computerScore += 1
            return "You lose! " + computerChoice + " beats " + humanChoice
        } else return "Draw"
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1
            return "You win! " + humanChoice + " beats " + computerChoice
        } else if (computerChoice === "scissors") {
            computerScore += 1
            return "You lose! " + computerChoice + " beats " + humanChoice
        } else return "Draw"
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1
            return "You win! " + humanChoice + " beats " + computerChoice
        } else if (computerChoice === "rock") {
            computerScore += 1
            return "You lose! " + computerChoice + " beats " + humanChoice
        } else return "Draw"
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore < computerScore) return "Final: Computer Wins"
    if (humanScore > computerScore) return "Final: Human Wins"
    return "Draw"
}

console.log(playGame());

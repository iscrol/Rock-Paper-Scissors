function getComputerChoice(){
    let option = Math.floor(Math.random() * 3);
    if (option == 0) {
        return "rock";
    } else if (option == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Type r for rock, p for paper, and s for scissors").toLowerCase();
    if (choice == 'r') {
        return "rock";
    } else if (choice == 'p') {
        return "paper";
    } else if (choice == 's') {
        return "scissors";
    } else {
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a tie! " + humanChoice + " ties " + computerChoice + ".");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "paper" && computerChoice == "rock") || 
                (humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        humanScore++;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
                (humanChoice == "paper" && computerChoice == "scissors") || 
                (humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You lost! " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    } else {
        console.log("Invalid Input!")
    }
}

function playGame(numRounds){
    for (i = 0; i < numRounds; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore){
        console.log("You won! " + humanScore + " to " + computerScore + ".");
    } else if (humanScore < computerScore){
        console.log("You lost! " + humanScore + " to " + computerScore + ".");
    } else {
        console.log("It was a tie! " + humanScore + " to " + computerScore + ".");
    }
}

playGame(5);
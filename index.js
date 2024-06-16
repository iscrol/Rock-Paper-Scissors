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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        resultDisplay.innerText = "It's a tie! " + humanChoice + " ties " + computerChoice + ".";
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "paper" && computerChoice == "rock") || 
                (humanChoice == "scissors" && computerChoice == "paper")){
        resultDisplay.innerText = "You win! " + humanChoice + " beats " + computerChoice + ".";
        humanScore++;
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
                (humanChoice == "paper" && computerChoice == "scissors") || 
                (humanChoice == "scissors" && computerChoice == "rock")){
        resultDisplay.innerText = "You lost! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
    } else {
        resultDisplay.innerText = "Invalid Input!";
    }
    score.innerText = "You: " + humanScore + " Computer: " + computerScore + ".";
    if (humanScore >= 5){
        finalResult.innerText = "You win!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else if (computerScore >= 5){
        finalResult.innerText = "The Computer wins!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const resultDisplay = document.getElementById("roundResult");
const score = document.getElementById("score");
const finalResult = document.getElementById("finalResult");

rockButton.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
})

paperButton.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
})

scissorsButton.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
})


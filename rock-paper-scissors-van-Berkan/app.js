const computerChoice=document.getElementById('computer-choice')
const playerChoice=document.getElementById('player-choice')
const resultOutput =document.getElementById('result')

const possibleChoices = document.querySelectorAll('button');

let player;
let computer;
let result;

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
player = e.target.id;
playerChoice.innerHTML = player;
generateComputerChoice();
getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
if (randomNumber == 1){
    computer = "rock";
} else if (randomNumber == 2) {
    computer = "paper";
} else if (randomNumber == 3){
    computer = "scissors";
}

computerChoice.innerHTML = computer;

}

 function getResult(){

    if (computer == player){
        result="gelijkspel"
    } else if (computer == "rock" && player == "player"){
        result = "gewonnen" 
    } else if (computer == "rock" && player == "scissors"){
        result = "verloren"
    } else if (computer == "paper" && player == "scissors"){
        result = "gewonnen"
    } else if (computer == "paper" && player == "rock"){
        result = "verloren"
    } else if(computer == "scissors" && player == "rock"){
            result= "gewonnen"
    } else if (computer == "scissors" && player =="paper"){
            result="verloren"
    }
        
    resultOutput.innerHTML =  result;

 }


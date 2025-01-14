const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

let.player;
let.computer;
let.result;

possibleChoices.forEach(button => button.addEventListeners('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();

}));
generateComputerChoice().

const randomNumber = Math.floor(Math.random() * 3) + 1;

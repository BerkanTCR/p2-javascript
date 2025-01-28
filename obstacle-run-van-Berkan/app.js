const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle');
const gameOverText = document.querySelector('.game-over');

let isJumping = false;
let isGameOver = false;
let positionX = 50;
let positionY = 0;
let moveSpeed = 50;

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' && !isJumping && !isGameOver) {
        isJumping = true;
        dinosaur.style.animation = 'jump 0.8s';
        setTimeout(() => {
            dinosaur.style.animation = 'none';
            isJumping = false;
        }, 800);
    }
    else if (event.key === 'a' && !isGameOver) {
        positionX -= moveSpeed;
        dinosaur.style.left = positionX + 'px';  
    }
    else if (event.key === 'd' && !isGameOver) {
        positionX += moveSpeed;  
        dinosaur.style.left = positionX + 'px'; 
    }
    else if (event.key === 's' && !isGameOver) {
        dinosaur.style.animation = 'duck 0.5s';
        setTimeout(() => {
            dinosaur.style.animation = 'none';
        }, 500);
    }
});

function checkCollision() {
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinosaurRect.right > obstacleRect.left &&
        dinosaurRect.left < obstacleRect.right &&
        dinosaurRect.bottom > obstacleRect.top
    ) {
        gameIsOver();
    }
}

function gameIsOver() {
    isGameOver = true;
    dinosaur.style.animation = 'none';
    obstacle.style.animation = 'none';
    gameOverText.style.display = 'block';

    clearInterval(collisionInterval);
}

const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game');

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none'; 
    gameContainer.style.display = 'block'; 

    isGameOver = false;
    gameOverText.style.display = 'none';
    positionX = 50;
    positionY = 0;
    dinosaur.style.left = positionX + 'px';
    dinosaur.style.bottom = positionY + 'px';
    

    collisionInterval = setInterval(checkCollision, 10);
});

let collisionInterval = setInterval(checkCollision, 10);


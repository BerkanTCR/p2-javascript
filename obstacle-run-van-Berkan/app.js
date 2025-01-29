const dinosaur = document.querySelector('.dinosaur');
const obstacle = document.querySelector('.obstacle');
const gameOverText = document.querySelector('.game-over');
const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('.start-button');
const gameContainer = document.querySelector('.game');

let isJumping = false;
let isGameOver = false;
let positionX = 50; 
let moveSpeed = 50; 

startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';

    resetGame();
    startObstacleMovement();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && !isJumping && !isGameOver) {
        jump();
    } else if (event.key === 'a' && !isGameOver) {
        moveLeft();
    } else if (event.key === 'd' && !isGameOver) {
        moveRight();
    } else if (event.key === 's' && !isGameOver) {
        duck();
    }
});

function jump() {
    isJumping = true;
    dinosaur.style.animation = 'jump 0.8s';
    setTimeout(() => {
        dinosaur.style.animation = 'none';
        isJumping = false;
    }, 800);
}

function moveLeft() {
    positionX = Math.max(0, positionX - moveSpeed);
    dinosaur.style.left = `${positionX}px`;
}

function moveRight() {
    positionX = Math.min(window.innerWidth - 50, positionX + moveSpeed); 
    dinosaur.style.left = `${positionX}px`;
}

function duck() {
    dinosaur.style.animation = 'duck 0.5s';
    setTimeout(() => {
        dinosaur.style.animation = 'none';
    }, 500);
}

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


function startObstacleMovement() {
    obstacle.style.left = '100%';

    const obstacleInterval = setInterval(() => {
        if (isGameOver) {
            clearInterval(obstacleInterval);
            return;
        }

        const currentLeft = parseInt(window.getComputedStyle(obstacle).left);
        if (currentLeft <= -50) {
            obstacle.style.left = '100%';
        } else {
            obstacle.style.left = `${currentLeft - 10}px`; 
        }
    }, 50);
}


function gameIsOver() {
    isGameOver = true;
    dinosaur.style.animation = 'none';
    obstacle.style.animation = 'none';
    gameOverText.style.display = 'block';

    clearInterval(collisionInterval); 
}


function resetGame() {
    isGameOver = false;
    gameOverText.style.display = 'none';
    positionX = 50; 
    dinosaur.style.left = `${positionX}px`;
    obstacle.style.left = '100%'; 

    collisionInterval = setInterval(checkCollision, 10);
}

let collisionInterval = null;



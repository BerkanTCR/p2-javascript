let hunger = 100;
let energy = 100;
let happiness = 100;

let feedbutton = document.getElementById('feed');
let sleepbutton = document.getElementById('sleep');
let playbutton = document.getElementById('play');

function updateHungerBar() {
    const hungerBar = document.getElementById('hunger');
    hungerBar.textContent = `Honger: ${hunger}`;
}

function decreaseHunger() {
    if (hunger > 0) {
        hunger -= 1;
        updateHungerBar();
    } else {
        clearInterval(hungerInterval);
    }
    showStatusMessage();  
}

let hungerInterval = setInterval(decreaseHunger, 100);

function updateEnergyBar() {
    const energyBar = document.getElementById('energy');
    energyBar.textContent = `Energie: ${energy}`;
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= 1;
        updateEnergyBar();
    } else {
        clearInterval(energyInterval);
    }
    showStatusMessage();  
}

let energyInterval = setInterval(decreaseEnergy, 100);

function updateHappinessBar() {
    const happinessBar = document.getElementById('happiness');
    happinessBar.textContent = `Geluk: ${happiness}`;
}

function decreaseHappiness() {
    if (happiness > 0) {
        happiness -= 1;
        updateHappinessBar();
    } else {
        clearInterval(happinessInterval);
    }
    showStatusMessage();  
}

let happinessInterval = setInterval(decreaseHappiness, 100);

function showStatusMessage() {
    const statusMessage = document.getElementById('statusMessage');
    if (hunger === 0 && energy === 0 && happiness === 0) {
        statusMessage.textContent = "Tamagotchi is dood!";
    } else {
        statusMessage.textContent = "Tamagotchi is gelukkig!";
    }
}

function feed() {
    hunger = 100;  
    updateHungerBar();
    clearInterval(hungerInterval);
    hungerInterval = setInterval(decreaseHunger, 100);
    showStatusMessage();
}

function sleep() {
    energy = 100;  
    updateEnergyBar();
    clearInterval(energyInterval);
    energyInterval = setInterval(decreaseEnergy, 100);
    showStatusMessage();
}

function play() {
    happiness = 100;  
    updateHappinessBar();
    clearInterval(happinessInterval);
    happinessInterval = setInterval(decreaseHappiness, 100);
    showStatusMessage();
}

updateHungerBar();
updateEnergyBar();
updateHappinessBar();
showStatusMessage();
let btn = document.getElementById('start')
let timeShow = document.getElementById('time')
let bg = document.getElementById('container')

let startTime;
let endTime;
let reactionTime;

function startTimer(){
    startTime = Date.now()
}

function startGame(){
    btn.style.display = "none";
    bg.style.backgroundColor = "red";
    setTimeout(function(){
        bg.style.background = "green";
        startTimer()
    }, Math.floor(Math.random() * 9 + 1) * 1000)
}

btn.addEventListener('click', startGame)

function stopTimer(){
    if(bg.style.backgroundColor == "green"){
        endTime = Date.now()
        console.log(endTime)
        reactionTime = endTime - startTime

        timeShow.innerText = reactionTime + " ms"
        btn.style.display = "block"
        bg.style.backgroundColor = "#2b87d1";

    }
}

bg.addEventListener('click', stopTimer)
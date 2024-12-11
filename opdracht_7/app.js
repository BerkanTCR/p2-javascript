let legediv = document.getElementById("legedivID");
let position = 0;

let intervalId = setInterval(function() {
    position+=10
    legediv.style.left = position+"px"
    if(position >innerWidth)
        position = 0

}, 100);


legediv.addEventListener('click',function(){
    legediv.style.backgroundColor = 'blue'
})
let button = document.getElementById("btn");

button.addEventListener('click', function () {
    console.log("geklikt")
})


window.addEventListener('keydown', function (e) {
    if (e.key == 'w') {
        console.log("naar boven")
    }
    if (e.key == 'a') {
        console.log("naar links")
    }
    if (e.key == 's') {
        console.log("naar beneden")
    }
    if (e.key == 'd') {
        console.log("naar rechts")
    }

})



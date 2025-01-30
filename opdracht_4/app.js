//let getal = 10 

//for(let i = 1; i < 10; i++){
    //document.getElementById('output').innerHTML += i + ' x ' + getal + ' = ' + i * getal + '<br>'
//}

function tafel_van(getal){
    for(let i = 1; i < 11; i++)
        document.getElementById('output').innerHTML += i + ' x ' + getal + ' = ' + i * getal + '<br>'    

}

tafel_van(7)

function tafel_van(getal) {
    let output = document.getElementById('output');
    output.innerHTML = ''; 
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += i + ' x ' + getal + ' = ' + i * getal + '<br>';
    }
}

function updateTafel() {
    let getal = document.getElementById('getal').value; 
    if (getal) {
        tafel_van(getal); 
    } else {
        alert("Vul een getal in!"); 
    }
}



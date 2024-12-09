let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

let aantalProducten = winkelmand.length;

document.getElementById("opdr1").innerText = `Er zitten ${aantalProducten} producten in uw winkelmand.`;

document.getElementById("opdr2").innerText = `Uw producten zijn: ${winkelmand}`;

document.getElementById("opdr3").innerText = `${winkelmand}, staat op de vierde plek in uw winkelmand`;

winkelmand[1]= "Bier "

document.getElementById("opdr4").innerText = `${winkelmand}`;

function product_toevoegen(){
    winkelmand.push("Aardbeien")
    document.getElementById("opdr5").innerText = `${winkelmand}`
}

if (winkelmand.length >= 0) {
    document.getElementById("opdr6").innerText = `U kunt boodschappen gaan doen.`;

}  else {
    document.getElementById("opdr6").innerText = `U heeft niets te kopen.`;
}

if (winkelmand[4] == "Drop") {
    document.getElementById("opdr7").innerText = winkelmand;

}  else {
    document.getElementById("opdr7").innerText = `U heeft geen drop`;
}

let winkelmandopdr8 = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
document.getElementById("opdr8").innerHTML = winkelmandopdr8.join(" ");

let winkelmandopdr9 = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
document.getElementById("opdr9").innerText = `${winkelmandopdr9}`
winkelmandopdr9.splice (0,2)
document.getElementById("opdr9.5").innerText = `${winkelmandopdr9}`

let winkelmandopdr10 = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
winkelmandopdr10.sort();
document.getElementById("opdr10").innerText = `${winkelmandopdr10}`


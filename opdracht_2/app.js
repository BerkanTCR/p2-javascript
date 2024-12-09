let output;

let input = document.getElementById("ProductInput");
let text = document.getElementById("output");
let shop = [];

function add_product()
{
    output = input.value;
    shop.push(output);
    console.log(shop);
    text.innerText = shop;
}
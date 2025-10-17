let add = function(x, y){return x+y;}
let subtract = function(x, y){return x-y;}
let multiply = function(x, y){return x*y;}
let divide = function(x, y){return x / y;}

let num1 = 0;
let num2 = 0;
let operator = "";

let operate = function(op, n1, n2){
    if (op === "+") add(n1, n2);
    if (op === "-") subtract(n1, n2);
    if (op === "*") multiply(n1, n2);
    if (op === "/") divide(n1, n2);
}

let tempDisplayTest = "";
const displayText = document.getElementById("display-text");

const keypadGrid = document.getElementById("keypad-grid");

keypadGrid.addEventListener("click", function(event){
    if (event.target && event.target.classList.contains("key")){
        tempDisplayTest += event.target.textContent;
        displayText.textContent = tempDisplayTest;
    }
})

let add = function(x, y){return x+y;}

let subtract = function(x, y){return x-y;}

const multiply = s => {
    const rx = /(-?\d+(?:\.\d+)?)\*(-?\d+(?:\.\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) * parseFloat(b)));
    return s;
};

let divide = s => {
    const rx = /(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) / parseFloat(b)));
    return s;
};

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
    //numbers and operators
    if (event.target && event.target.classList.contains("key-print") && tempDisplayTest.length < 11){
        tempDisplayTest += event.target.textContent;
        displayText.textContent = tempDisplayTest;
    }
    //clear key
    if (event.target && event.target.classList.contains("key-clear")){
        tempDisplayTest = "";
        displayText.textContent = tempDisplayTest;
    }
    //backspace key
    if (event.target && event.target.classList.contains("key-back")){
        tempDisplayTest = tempDisplayTest.slice(0,-1);
        displayText.textContent = tempDisplayTest;
    }
    //equal key
    if (event.target && event.target.classList.contains("key-equal")){
        tempDisplayTest = divide(multiply(tempDisplayTest));
        displayText.textContent = tempDisplayTest;
    }})

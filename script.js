let add = s => {
    const rx = /((?:\d*\.\d+|\d+)?)\+((?:\d*\.\d+|\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) + parseFloat(b)));
    return s;
};

let subtract = s => {
    const rx = /((?:\d*\.\d+|\d+)?)\-((?:\d*\.\d+|\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) - parseFloat(b)));
    return s;
};

const multiply = s => {
    const rx = /((?:\d*\.\d+|\d+)?)\*((?:\d*\.\d+|\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) * parseFloat(b)));
    return s;
};

let divide = s => {
    const rx = /((?:\d*\.\d+|\d+)?)\/((?:\d*\.\d+|\d+)?)/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) / parseFloat(b)));
    return s;
};

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
        //order of operations
        tempDisplayTest = subtract(add(divide(multiply(tempDisplayTest))));
        displayText.textContent = tempDisplayTest.slice(0,11);
    }});

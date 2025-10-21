const add = s => {
    const rx = /(-?(?:\d*\.\d+|\d+))\+(-?(?:\d*\.\d+|\d+))/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) + parseFloat(b)));
    return s;
};

const subtract = s => {
    const rx = /(-?(?:\d*\.\d+|\d+))\-(-?(?:\d*\.\d+|\d+))/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) - parseFloat(b)));
    return s;
};

const multiply = s => {
    const rx = /(-?(?:\d*\.\d+|\d+))\*(-?(?:\d*\.\d+|\d+))/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) * parseFloat(b)));
    return s;
};

const divide = s => {
    const rx = /(-?(?:\d*\.\d+|\d+))\/(-?(?:\d*\.\d+|\d+))/;
    while (rx.test(s)) s = s.replace(rx, (_, a, b) => String(parseFloat(a) / parseFloat(b)));
    return s;
};

let tempDisplay = "";
const displayText = document.getElementById("display-text");

const keypadGrid = document.getElementById("keypad-grid");

keypadGrid.addEventListener("click", function(event){
    //numbers and operators
    if (event.target && event.target.classList.contains("key-print")){
        tempDisplay += event.target.textContent;
        displayText.textContent = tempDisplay;
    }
    //clear key
    if (event.target && event.target.classList.contains("key-clear")){
        tempDisplay = "";
        displayText.textContent = tempDisplay;
    }
    //backspace key
    if (event.target && event.target.classList.contains("key-back")){
        tempDisplay = tempDisplay.slice(0,-1);
        displayText.textContent = tempDisplay;
    }
    //equal key
    if (event.target && event.target.classList.contains("key-equal")){
        //stopping div by 0
        if(/\/0(?![0-9.])/.test(tempDisplay)){
            alert("Sorry! You must upgrade to the premium calculator to divide by 0!");
            tempDisplay = "";
        } 
        //stopping  operations with exponents
        if(/[A-Za-z]/.test(tempDisplay)){
            alert("Sorry! You must upgrade to the premium calculator to play with really big numbers!");
            tempDisplay = "";
        }
        //stopping incomplete operations
        if(/(?:^|[^0-9])([/*+]|-(?!\d))|([/*+]|-(?!\d))(?!\d)/.test(tempDisplay)){
            alert("Sorry! Please complete your function! (There's a stray operator somewhere)");
        }else{
            //order of operations
            tempDisplay = subtract(add(divide(multiply(tempDisplay))));
            displayText.textContent = tempDisplay;
        }
        
    }});

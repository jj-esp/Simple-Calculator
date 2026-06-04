// Calculator Program

const display = document.getElementById("display");
const operators = ["+", "-", "x", "÷"];
let lastOperand = "";
let lastOperator = "";
let justCalculated = false;

function appendToDisplay(input) {
    // If a calculation was just finished and user enters a number or .
    if (justCalculated && /[\d.]/.test(input)) {
        display.value = input;
        justCalculated = false;
        return;
    }
    // Don't allow operator as first input
    if (display.value === "" && operators.includes(input)) {
        return;
    }

    // Prevent two operators in a row
    const lastChar = display.value.slice(-1);

    if (
        operators.includes(input) &&
        operators.includes(lastChar)
    ) {
        return;
    }
    display.value += input;
    justCalculated = false;
}

function calculate() {
    try {
        // If display is empty, show 0
        if (display.value.trim() === "") {
            display.value = "0";
            return;
        }

        // Repeat last operation when = is pressed again
        if (justCalculated && lastOperator && lastOperand) {
            display.value = eval(
                display.value + lastOperator + lastOperand
            );
            return;
        }

        let expression = display.value
            .replace(/x/g, "*")
            .replace(/÷/g, "/");

        // Save last operation
        const match = expression.match(/([+\-*/])(\d+\.?\d*)$/);

        if (match) {
            lastOperator = match[1];
            lastOperand = match[2];
        }

        display.value = eval(expression);
        justCalculated = true;
    } catch {
        display.value = "Error";
    }
}
function clearDisplay(input){
    display.value ="";
}
function clearEntry(input){
    display.value = display.value.replace(/\d+$/, "");
}
function removeLastEntry(){
    display.value = display.value.slice(0, -1);
}
function percentage() {
    display.value = display.value.replace(
        /(\d+\.?\d*)$/,
        (match) => Number(match) / 100
    );
}
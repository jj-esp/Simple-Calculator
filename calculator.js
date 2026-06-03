// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
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
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

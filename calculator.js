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
function percentage(){
    display.value = Number(display.value) / 100;   // still a bug
  }  
function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

let display = document.getElementById("display")
let currentInput = ""
let currentOperator = ""

function appendNumber(value){
    currentInput += value
    display.textContent = currentInput
}

function appendOperator(operator){
    if (currentInput === "") {
        return
    } else {
        appendNumber(operator)
    } 
}

function calculate(){
    try {
        let result = eval(currentInput)

        if (!Number.isInteger(result)){
            result = result.toFixed(2)
        } else {
            currentInput = result
            display.textContent = currentInput
        }   
        
    } catch(error) {
        display.textContent = "Algo deu errado"
        currentInput = ""
    }
}

function cleardisplay() {
    currentInput = "";
    display.textContent = currentInput
}
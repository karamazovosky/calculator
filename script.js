//variables
let mainFocus = document.querySelector(".mainfocus > p");
let fullDigit = document.querySelector(".fulldigit > p");
let inputButton = document.querySelectorAll(".calculator-keypad > button , .calculator-operate-top > button, .calculator-operate-side > button");
let currentNumber = "";
let previousNumber = "";
let operatingKey = null;

//conditionals for first input and one-time decimal usage
let decimalEntry = false;
let firstInput = true;
let secondInput = false;

//write digit on screen
inputButton.forEach(selectedButton => {
    selectedButton.addEventListener('click', () => {
        let currentKey = selectedButton.innerText;

        //for numbers display only
        if(/[\d.]/.test(currentKey) && mainFocus.textContent.length < 9){
            //first input 
            //if dot is pressed once and decimalentry is true, return
            if(currentKey === "." && decimalEntry) {
                return
            }
            //if first input is equal to zero, then return
            if(currentNumber === "" && currentKey === "0"){
                return
            }
            //checks for decimal input once
            if (currentKey === "." && !decimalEntry){
                decimalEntry = true;
            }
            //if number is added then store it in variable then edit the display
            currentNumber += currentKey;
            mainFocus.textContent = currentNumber;
        }

        //function operation sign redirect
        if(/[^\dClear←=.]/.test(selectedButton.innerText)) {
            operateSign(currentKey);
        }

        //function operate final redirect
        if(/=/.test(selectedButton.textContent)){
            if(previousNumber === ''){
                return
            }
            if(operatingKey === null){
                return
            }
            currentNumber = parseFloat(currentNumber);
            console.log("ey");
            operateFinal(currentNumber, previousNumber);
        }

        //function extras redirect
        if(/[←Clear]/.test(selectedButton.textContent)){
            extraFunctionality(currentKey);
        }
    })
})

//function for backspace and clear
function extraFunctionality(key){
    if (key === "Clear") {
        currentNumber = "";
        previousNumber = "";
        mainFocus.textContent = "0";
        fullDigit.textContent = "";
        decimalEntry = false;
        firstInput = true;
        secondInput = false;
        operatingKey = null;
    }
    if (key === "←") {
        let deletedChar = currentNumber.slice(-1);
        currentNumber = currentNumber.slice(0, -1);
        
        if (currentNumber.length === 0) {
            currentNumber = "";
            mainFocus.textContent = "0";
        }else {
            if(deletedChar === "."){
                decimalEntry = false
            }
            mainFocus.textContent = currentNumber;
        }

    }
}

function operateSign(key){
    let convertFloat = parseFloat(currentNumber);
    //if parsefloat currentnumber is nonexist, return
    if(firstInput){
        //previous condition on if ---->  (/[0NaN]/.test(convertFloat) || convertFloat === 0) && 
        if(isNaN(convertFloat) || convertFloat === 0){
            return
        }
    }
    if(firstInput){
        firstInput = false;
        previousNumber = convertFloat;
        currentNumber = "";
        mainFocus.textContent = "0";
    }
    if(secondInput){
        mainFocus.textContent = "0";
        secondInput = false;
    }
    fullDigit.textContent = `${previousNumber} ${key}`;
    operatingKey = key;
}

function operateFinal(a,b){
    if (isNaN(a)){
        a = 0;
    }
    switch(operatingKey){
        case "+":
            fullDigit.textContent = `${previousNumber} ${operatingKey} ${currentNumber}`;
            mainFocus.textContent = `${(previousNumber+currentNumber)}`;
            previousNumber = parseFloat(mainFocus.textContent);
            currentNumber = '';
            secondInput = true;
            operatingKey = null;
            return
        case "-":
            fullDigit.textContent = `${previousNumber} ${operatingKey} ${currentNumber}`;
            mainFocus.textContent = `${(previousNumber-currentNumber)}`;
            previousNumber = parseFloat(mainFocus.textContent);
            currentNumber = '';
            secondInput = true;
            operatingKey = null;
            return
        case "X":
            fullDigit.textContent = `${previousNumber} ${operatingKey} ${currentNumber}`;
            mainFocus.textContent = `${(previousNumber*currentNumber)}`;
            previousNumber = parseFloat(mainFocus.textContent);
            currentNumber = '';
            secondInput = true;
            operatingKey = null;
            return
        case "/":
            if(a === 0){
                alert("Cannot divide by 0");
                currentNumber = '';
                return
            }
            secondInput = true;
            fullDigit.textContent = `${previousNumber} ${operatingKey} ${currentNumber}`;
            operatingKey = null;
            mainFocus.textContent = `${(previousNumber/currentNumber).toFixed(3)}`;
            previousNumber = parseFloat(mainFocus.textContent);
            currentNumber = '';
            return

    }

}


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
            console.log("a")
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
    fullDigit.textContent = `${previousNumber} ${key}`;
    operatingKey = key;
}

function operateFinal(a,b,key){
    if (isNaN(a)){
        a = 0;
    }

}


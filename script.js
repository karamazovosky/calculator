//variables
let mainFocus = document.querySelector(".mainfocus > p");
let fullDigit = document.querySelector(".fulldigit > p");
let inputButton = document.querySelectorAll(".calculator-keypad > button , .calculator-operate-top > button, .calculator-operate-side > button");
let firstPass = true;
let secondPass = false;
let firstNumber = "";
let secondNumber = "";

//write digit on screen
inputButton.forEach(selectedButton => {
    selectedButton.addEventListener('click', () => {

        //for numbers only
        if(/[\d.]/.test(selectedButton.innerText)){
            if(firstPass){firstPass = false; mainFocus.textContent = ""}
            mainFocus.textContent += selectedButton.innerText;
            firstNumber = parseFloat(mainFocus.textContent);
            console.log(firstNumber);
        }

        //function operation
        if(/[^\dClear←=]/.test(selectedButton.innerText)) {
            console.log("tru")
        }

        //function calculate/operate
        if(/=/.test(selectedButton.textContent)){
            console.log("dat")
        }

        //function extras
        if(/[←Clear]/.test(selectedButton.textContent)){
            console.log("dank")
        }
    })
})
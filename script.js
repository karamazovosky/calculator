//variables
let mainFocus = document.querySelector(".mainfocus > p");
let fullDigit = document.querySelector(".fulldigit > p");
let inputButton = document.querySelectorAll(".calculator-keypad > button , .calculator-operate-top > button, .calculator-operate-side > button");
let firstPass = true;
let dotUsage = false;

//write digit on screen
inputButton.forEach(selectedButton => {
    selectedButton.addEventListener('click', () => {
        currentKey = selectedButton.innerText;

        //for numbers only
        if(/[\d.]/.test(currentKey)){
            if(firstPass && currentKey != "0"){
                firstPass = false; mainFocus.textContent = "";
            };
            if((mainFocus.textContent != "0") && (mainFocus.textContent.length < 9)) {
                if (dotUsage && currentKey == "."){
                    return
                }
                mainFocus.textContent += selectedButton.innerText;
            }
            if(currentKey == ".") {
                dotUsage = true;
            }
        }

        //function operation sign
        if(/[^\dClear←=.]/.test(selectedButton.innerText)) {
            console.log(parseFloat(mainFocus.textContent));
        }

        //function operate
        if(/=/.test(selectedButton.textContent)){
            console.log("dat")
        }

        //function extras
        if(/[←Clear]/.test(selectedButton.textContent)){
            console.log("dank")
        }
    })
})
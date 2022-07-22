const button = document.querySelectorAll('.number, .function');
let displayedNumber = document.querySelector('.display');
displayedNumber.textContent = "0";
let firstNumber = 0;
let secondNumber = 0;
let operationSymbol = '';
let temp = '';

//if selected number is 1-9 then proceed to write the number
let checkDisplay = false;

button.forEach(button => {
    button.addEventListener('click', () => {
        let selectedButton = button.textContent;
        let checkSelectedButton = /\d/.test(selectedButton);


        if(checkSelectedButton) {
            checkDisplay = (displayedNumber.textContent != "0");
            numberDisplayFunction(selectedButton);

        }else if(!checkSelectedButton){
            if (selectedButton != "=" && displayedNumber.textContent != 0 && selectedButton != "AC") {
                firstNumber = parseFloat(displayedNumber.textContent)
                displayedNumber.textContent = "0";
                operationSymbol = selectedButton;

            }else if (selectedButton === "=" && firstNumber != 0){
                secondNumber = parseFloat(displayedNumber.textContent);
                calculateNumber(firstNumber, secondNumber);
            }else if (selectedButton === "AC") {
                firstNumber = 0;
                displayedNumber.textContent = "0";
            }
        }
    })
})


//eventlistener display number clicked function
function numberDisplayFunction(currentNumber) {
    //set first number
    if(!checkDisplay) {
        displayedNumber.textContent = currentNumber;
        return
    }
    if(checkDisplay) {
        displayedNumber.textContent += currentNumber;
        return
    }
}

//function to calculate
function calculateNumber(a, b) {
    let result = 0;
    switch (operationSymbol) {
        case "+":
            result = a + b
            displayedNumber.textContent = result;
            secondNumber = 0;
            break

        case "−":
            result = a-b;
            displayedNumber.textContent =result;
            secondNumber = 0;
            break
        case "×":
            result = a * b;
            displayedNumber.textContent = result;
            secondNumber = 0;
            break
        case "÷":
            if (secondNumber === 0) {
                alert("Cannot Divide by 0 :(")
                break
            }
            result = a / b;
            displayedNumber.textContent = result;
            secondNumber =0;
            break
    }
}
const button = document.querySelectorAll('.number, .function');
let displayedNumber = document.querySelector('.display');
let displayNumberContent = "0";
displayedNumber.textContent = displayNumberContent;

button.forEach(button => {
    button.addEventListener('click', () => {
        const selectedButton = button.textContent;
        if(/\d/.test(selectedButton)) {
            numberDisplayFunction(selectedButton);
        }
    })
})

let checkFirstInput = true;
//eventlistener display number clicked function
function numberDisplayFunction(currentNumber) {
    //if selected number is 1-9 then proceed to write the number
    let checkDisplay = currentNumber === "0" && displayNumberContent === "0";
    //set first number
    if((!checkDisplay && (displayNumberContent == "0")) && checkFirstInput ) {
        displayedNumber.textContent = currentNumber;
        displayNumberContent = currentNumber;
        checkFirstInput= false;
        return;
    }
    if(displayNumberContent.textContent != "0") {
        displayedNumber.textContent += currentNumber;
        displayNumberContent = currentNumber;
    }

}
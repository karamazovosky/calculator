const button = document.querySelectorAll('.number, .function');
let displayedNumber = document.querySelector('.display');
displayedNumber.textContent = "0";

button.forEach(button => {
    button.addEventListener('click', () => {
        const selectedButton = button.textContent;
        if(/\d/.test(selectedButton)) {
            numberDisplayFunction(selectedButton);
        }
    })
})


//eventlistener display number clicked function
function numberDisplayFunction(currentNumber) {
    //if selected number is 1-9 then proceed to write the number
    let checkDisplay = !(displayedNumber.textContent === "0");
    //set first number
    if(!checkDisplay) {
        displayedNumber.textContent = currentNumber;
        return;
    }
    if(checkDisplay) {
        displayedNumber.textContent += currentNumber;
    }

}
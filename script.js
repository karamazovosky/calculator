const button = document.querySelectorAll('.number, .function');
const displayedNumber = document.querySelector('.display');

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
    displayedNumber.textContent = currentNumber;
}
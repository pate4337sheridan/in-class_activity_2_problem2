function checkEvenOdd() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');

    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        result.textContent = "Please enter a valid number.";
    } else {
        result.textContent = (number % 2 === 0) ? "The number is even." : "The number is odd.";
    }
}
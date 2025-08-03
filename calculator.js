// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Error: Division by zero!";
    }
    return number1 / number2;
}

// Function to get input values and display result
function performOperation(operationFunction) {
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    // Convert input values to numbers, providing default 0 for empty inputs
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;

    const result = operationFunction(number1, number2);
    resultSpan.textContent = result;
}

// Attach Event Listeners to Buttons
document.getElementById('add').addEventListener('click', function() {
    performOperation(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    performOperation(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    performOperation(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    performOperation(divide);
});
function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply': return multiply(numOne, numTwo); return
        case 'divide': return divide(numOne, numTwo);
        case 'add': return add(numOne, numTwo);
        case 'subtract': return subtract(numOne, numTwo);
    }

}
console.log(simpleCalculator(5, 5, 'multiply'))
console.log(simpleCalculator(40, 8, 'divide'))
console.log(simpleCalculator(12, 19, 'add'))
console.log(simpleCalculator(50, 13, 'subtract'))
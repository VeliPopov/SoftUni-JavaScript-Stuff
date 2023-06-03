function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let output = 0;

    switch (operator) {
        case 'multiply': output = multiply(numOne, numTwo); break;
        case 'divide': output = divide(numOne, numTwo); break;
        case 'add': output = add(numOne, numTwo); break;
        case 'subtract': output = subtract(numOne, numTwo); break;
    }
    console.log(output);

}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')
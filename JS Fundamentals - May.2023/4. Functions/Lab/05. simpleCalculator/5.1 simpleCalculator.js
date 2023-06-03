function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (a, b) => console.log(a * b);
    let divide = (a, b) => console.log(a / b);
    let add = (a, b) => console.log(a + b);
    let subtract = (a, b) => console.log(a - b);

    switch (operator) {
        case 'multiply': multiply(numOne, numTwo); break;
        case 'divide': divide(numOne, numTwo); break;
        case 'add': add(numOne, numTwo); break;
        case 'subtract': subtract(numOne, numTwo); break;
    }

}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')
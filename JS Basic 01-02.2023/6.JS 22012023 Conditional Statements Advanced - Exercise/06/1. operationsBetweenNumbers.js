function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = 0;


    switch (operator) {
        case '+':
            result = num1 + num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            } else {
                evenOrOdd = 'odd';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            }
            break;

        case '-':
            result = num1 - num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            } else {
                evenOrOdd = 'odd';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            }
            break;

        case '*':
            result = num1 * num2;
            if (result % 2 === 0) {
                evenOrOdd = 'even';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            } else {
                evenOrOdd = 'odd';
                console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`);
            }
            break;

        case '/':
            result = num1 / num2;
            if (num1 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
            }
            return;

        case '%':
            result = num1 % num2;
            if (num1 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            }
            return;
        break;

    }


}
operationsBetweenNumbers(["10","1","-"]);

function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;

    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerAndFloat(9, 100, 1.1)

//две решения с идентичен резултат:

function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let result = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;
    console.log(result);
}
integerAndFloat(9, 100, 1.1)
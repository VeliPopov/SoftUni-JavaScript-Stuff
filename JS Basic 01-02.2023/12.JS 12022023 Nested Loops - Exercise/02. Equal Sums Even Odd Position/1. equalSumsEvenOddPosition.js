function equalSumsEvenOddPosition(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);

    let result = '';

    for (let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        let oddPositionSum = 0;
        let evenPositionSum = 0;

        // let currentNumAsString = currentNumber + ' '; // начин да конвертирам число в стринг - интерпретатора събира числото с празния стринг
        let currentNumAsString = currentNumber.toString(); //по-правилния вариант

        for (let index = 0; index < currentNumAsString.length; index++) {
            let currentDigit = Number(currentNumAsString[index]);

            let position = index + 1; //позицията в стринга - четна/нечетна

            if (position % 2 === 0) {
                evenPositionSum += currentDigit;
            } else {
                oddPositionSum += currentDigit;
            }

        }
        if (oddPositionSum === evenPositionSum) {
            result += currentNumAsString + ' ';

        }

    }
    console.log(result);

}
equalSumsEvenOddPosition(["100000", "100050"]);

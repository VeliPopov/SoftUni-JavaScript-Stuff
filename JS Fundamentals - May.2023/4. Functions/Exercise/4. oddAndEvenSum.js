function oddAndEvenSum(number) {
    
    let numberAsString = number.toString()

    let evenSum = 0;
    let oddSum = 0;
    // let numberAsStringLength = numberAsString.length

    for (let index = 0; index < numberAsString.length; index++) {
        // дава ми numberAsString[index];
        let currentNumber = Number(numberAsString[index]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}
console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));
function magicSum(array, num) {

    for (let i = 0; i < array.length; i++) {
        if (i !== 0) {
            let previousNumber = array[i - 1];

            for (let j = i; j < array.length; j++) {
                let currentNumber = array[j];
                let sum = currentNumber + previousNumber;
                if (sum === num) {
                    console.log(`${previousNumber} ${currentNumber}`);
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)
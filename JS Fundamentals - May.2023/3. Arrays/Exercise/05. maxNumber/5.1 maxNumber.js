function maxNumber(arr) {

    let result = [];

    for (let i = 1; i <= arr.length; i++) {

        let isMax = true;
        let currentNumber = arr[i - 1];

        for (let j = i; j < arr.length; j++) {

            let nextNumber = arr[j];

            if (nextNumber >= currentNumber) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result.push(currentNumber)
        }
    }
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
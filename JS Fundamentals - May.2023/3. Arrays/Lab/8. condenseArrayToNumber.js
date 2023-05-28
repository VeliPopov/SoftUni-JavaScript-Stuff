function condenseArrayToNumber(number) {
    let result = [];

    while (number.length > 1) {
        for (let i = 0; i < number.length - 1; i++) {
            result[i] = number[i] + number[i + 1]
        }
        number = result;
        result = [];
    }
    console.log(number.join());
}
condenseArrayToNumber([2, 10, 3])
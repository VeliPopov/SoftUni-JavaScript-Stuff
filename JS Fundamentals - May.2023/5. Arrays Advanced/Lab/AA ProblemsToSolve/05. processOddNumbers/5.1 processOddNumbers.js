function processOddNumbers(array) {

    return array.filter((element, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}
console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
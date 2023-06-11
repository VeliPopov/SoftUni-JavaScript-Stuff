function processOddNumbers(array) {
    
    let oddElement = array.filter((element, index) => index % 2 !== 0);
    let doubledElement = oddElement.map(x => x * 2);

    console.log(doubledElement.reverse().join (' '));
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])
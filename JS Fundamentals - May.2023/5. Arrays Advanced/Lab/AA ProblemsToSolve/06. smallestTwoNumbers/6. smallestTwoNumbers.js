function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b);
    let output = array.slice(0, 2);
    console.log(output.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
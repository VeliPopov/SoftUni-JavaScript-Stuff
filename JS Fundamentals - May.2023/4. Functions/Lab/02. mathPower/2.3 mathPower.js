function myMath(num, power) {

    let output = 1;
    for (let i = 0; i < power; i++) {

        output = multiplyTwoNumbers(output, num);
    }
    function multiplyTwoNumbers(a, b) {
        return a * b;
    }
    return output;
}
console.log(myMath(2, 8))
console.log(myMath(3, 4))
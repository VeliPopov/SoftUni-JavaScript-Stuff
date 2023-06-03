function myMath(num, power) {

    let output = 1;
    for (let i = 0; i < power; i++) {

        output = multiplyTwoNumbers(output, num);
    }
    console.log(output);

}
function multiplyTwoNumbers(a, b) {
    return a * b;
}
myMath(2, 8)
myMath(3, 4)
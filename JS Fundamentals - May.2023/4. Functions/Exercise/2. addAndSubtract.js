function addAndSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }
    let firstResult = sum(num1, num2);

    function subtract(firstResult, num3) {
        return firstResult - num3;
    }
    let secondResult = subtract(firstResult, num3);
    return secondResult;
    // return subtract(sum(num1, num2), num3);
    // return subtract(firstResult, num3)
}
console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));

//важно е всяка една от функциите да бъде извикана! - да се върне везултата

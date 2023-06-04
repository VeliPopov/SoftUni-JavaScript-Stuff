function smallestOfThreeNumbers(num1, num2, num3) {

    return Math.min(num1, num2, num3);
}
console.log(smallestOfThreeNumbers(2, 5, 3));
console.log(smallestOfThreeNumbers(600, 342, 123));
console.log(smallestOfThreeNumbers(25, 21, 4));
console.log(smallestOfThreeNumbers(2, 2, 2));

// Math.min и Math.max методите могат да приемат повече от два параметъра(n на брой числа)
// винаги връщат число

// return само връща резултат от функцията, без да го печати
// return, е може да се каже задължителен, за да изчисти undefined резултата, винаги връщан от функцията (неизбежен е по default в JS), ако няма друг
// резултата идва там където се извиква функцията, затова ако искам да го видя, трябва там да го пусна в конзолата
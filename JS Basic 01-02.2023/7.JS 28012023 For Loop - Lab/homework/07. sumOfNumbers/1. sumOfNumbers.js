function sumOfNumbers(input) {
    let numAsText = input[0];
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        let currnetNumber = Number(numAsText[i]);
        sum += currnetNumber;

    }

    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);   //числото не е стринг - то е един цял елемент

//числото няма дължина и не може да бъде обхождано по дължина
// затова не се взима като число горе от импута (без Number(), а директно като стринг 
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let text of arr) {
        let num = Number(text);
        sum += num % 2 === 0 ? num : 0;
    }
    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10'])
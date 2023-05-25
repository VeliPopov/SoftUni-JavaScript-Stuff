function sumNumbers(input) {
    let index = 0;

    let number = Number(input[index]);
    index++;

    let sumOfNumbers = 0;

    while (sumOfNumbers <= number) {
        let newNumber = Number(input[index]);

        sumOfNumbers += newNumber;
        index++;
        if(sumOfNumbers >= number) {
            break;
        }
        
    }
    console.log(sumOfNumbers);

}
sumNumbers([
    "100",
    "10",
    "20",
    "30",
    "40"]);
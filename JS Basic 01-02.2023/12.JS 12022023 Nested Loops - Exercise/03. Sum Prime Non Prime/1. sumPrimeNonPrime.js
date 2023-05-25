function sumPrimeNonPrime(input) {
    let index = 0;

    let command = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {
        let number = Number(command);

        if (number < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < number; divider++) {
            if (number % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) { //(isPrime === true) - същото нещо, друг синтаксис
            primeSum += number;
        } else {
            nonPrimeSum += number;
        }
        command = input[index];
        index++;

    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

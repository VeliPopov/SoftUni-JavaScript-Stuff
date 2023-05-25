function minNumber(input) {
   
    let index = 0;
    let newInput = input[index];
    index++;

    let myMinNumber = Number.MAX_SAFE_INTEGER;

    while (newInput !== 'Stop') {
        let number = Number(newInput);

        if (myMinNumber > number) {
            myMinNumber = number;
        }

        newInput = input[index];
        index++;
    }
    console.log(myMinNumber);

}
minNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop"]);

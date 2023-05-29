function addAndSubtract(input) {

    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;
    // let arrayLength = input.length;    
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]); 

        sumOfOriginalArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newArr[i] = currentNumber;
        sumOfModifiedArray += currentNumber;

    }
    console.log(newArr);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);

}
addAndSubtract([5, 15, 23, 56, 35])

//решението е със създаване на нов масив
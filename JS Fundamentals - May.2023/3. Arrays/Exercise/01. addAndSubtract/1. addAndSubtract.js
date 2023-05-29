function addAndSubtract(input) {

    let sumOfOriginalArray = 0;
    let sumOfModifiedArray = 0;
    let arrayLength = input.length;    //спомагателна променлива, в която е заложена дължината на масива (по този начин се оптимизира скоростта на цикъла)

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(input[i]); 

        sumOfOriginalArray += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        input[i] = currentNumber;
        sumOfModifiedArray += currentNumber;

    }
    console.log(input);
    console.log(sumOfOriginalArray);
    console.log(sumOfModifiedArray);

}
addAndSubtract([5, 15, 23, 56, 35])


//кода се изпълнява отгоре на долу и от ляво на дясно
//затова въпреки, че променливата е една и съща, в раз личните моменти, записаните стойности в тях са различни

//решението е с модифициране на стария масив
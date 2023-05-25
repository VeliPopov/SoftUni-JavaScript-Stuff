function vacation(input) {
    let index = 0;

    let vacationPrice = Number(input[index]);
    index++; //i = 1

    let availableMoney = Number(input[index]);
    index++; //i = 2

    let consecutiveDaysSpent = 0;
    let totalDays = 0;

    while (availableMoney < vacationPrice) {
        let action = input[index]; //щом съм инициализирал променливата вътре в цикъла, няма нужда да я взимам наново (долу след проверките, в края на цикъла)
        index++;

        let sum = Number(input[index]); //щом съм инициализирал променливата вътре в цикъла, няма нужда да я взимам наново (долу след проверките, в края на цикъла)
        index++;

        if (action === 'save') {
            availableMoney += sum;
            consecutiveDaysSpent = 0;  //обозначава прекъсването на цикъла на харчене (последователните дни в които харчи)
        } else if (action === 'spend') {
            if (sum > availableMoney) {
                availableMoney = 0; //обозначава момента, в който е изхарчила всичките си пари
            } else {
                availableMoney -= sum;
            }
            
            consecutiveDaysSpent++;
        }
        
        totalDays++;

        if (consecutiveDaysSpent === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }
        
    }
    if (availableMoney >= vacationPrice) {
        console.log(`You saved the money for ${totalDays} days.`);
    }

}
vacation([
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
]);
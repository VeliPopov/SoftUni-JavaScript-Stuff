function vacation(input) {
    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;

    let moneyOnHand = Number(input[index]);
    index++;

    let action = input[index]; //действие
    index++;
    let sum = Number(input[index]); //сума (число)
    index++;

    let daysToSpend = 0;
    let totalDays = 0; //гледай внимателно условието - трябват всички дни, не само тези през които е харчила

    while (moneyOnHand < moneyNeeded) {
        totalDays++; //всички дни - още преди проверките
        if (action === 'spend') {
            if (sum > moneyOnHand) {
                moneyOnHand = 0; 
            } else {
                moneyOnHand -= sum; //вадиш ги от оборотните пари, не от общите
            }
            daysToSpend++;

        } else {
            moneyOnHand += sum;
            daysToSpend = 0;

        }
        if (daysToSpend === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            return;
        }
        action = input[index];
        index++;
        sum = Number(input[index]);
        index++;
    }
    console.log(`You saved the money for ${totalDays} days.`);
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);


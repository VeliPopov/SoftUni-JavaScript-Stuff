function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCount = 0;
    let moneyFromToys = 0;
    let moneyReceived = 0;
    let birthdayBonus = 10; //това ми трябва за да добавя двойния подарък на всеки следващ четен рожден ден
    
    for (let i = 1; i <= lilysAge; i++) {

        if (i % 2 === 0) {
            moneyReceived += birthdayBonus; // + допълнителните пари на първия рожден ден - в последствие двойно по толкова
            moneyReceived -= 1;   // вади взетите пари директно от първата променлива, не е нужно да се прави отделна такава
            birthdayBonus += 10;   //+ двоен подарък на всеки следващ рожден ден

        } else {
            toysCount++;
            moneyFromToys = toysCount * toyPrice;
        }

    }

    let moneySaved = moneyReceived + moneyFromToys;
    if (moneySaved >= washingMachinePrice) {
        let moneyLeft = moneySaved - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} `);
    } else {
        let moneyNeeded = washingMachinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)} `);
    }


}
cleverLily(["21", "1570.98", "3"]);
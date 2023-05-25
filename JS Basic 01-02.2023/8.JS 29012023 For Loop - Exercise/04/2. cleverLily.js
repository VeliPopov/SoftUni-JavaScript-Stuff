//FIXME: решение с малко по-съкратена версия на кода 
//всичко директно се запазва в една порменлива moneyReceived, която е определена за спестените пари


function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyReceived = 0;
    let birthdayBonus = 10; 
    
    for (let i = 1; i <= lilysAge; i++) {

        if (i % 2 === 0) {
            moneyReceived += birthdayBonus; 
            moneyReceived -= 1;  
            birthdayBonus += 10;   

        } else {
            moneyReceived += toyPrice;
        }
    }
        if (moneyReceived >= washingMachinePrice) {
        let moneyLeft = moneyReceived - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} `);
    } else {
        let moneyNeeded = washingMachinePrice - moneyReceived;
        console.log(`No! ${moneyNeeded.toFixed(2)} `);
    }

}
cleverLily(["21", "1570.98", "3"]);
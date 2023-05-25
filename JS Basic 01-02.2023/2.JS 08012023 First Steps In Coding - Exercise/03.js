// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)


// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

// Процетите във входа винаги!!!! се делят на 100, за да се вложи този вход като десетична дроб. 
// Интерпретатора не знае дали това е число или процент.



function depositCalculator(input) {

    let depositedSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annuaInterestRate = Number(input[2]) /100;


    let sum = depositedSum + depositTerm * ((depositedSum * annuaInterestRate) / 12);
    console.log(sum);

}

depositCalculator(["2350", "6", "7"])
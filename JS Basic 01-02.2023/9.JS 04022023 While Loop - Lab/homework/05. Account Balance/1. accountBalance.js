function accountBalance(input) {
    let accountBallance = 0;

    let index = 0;
    let newInput = input[index]; // тази променлива е тук, защото не е ясно дали новияИнпут ще е число или фраза
    index++;

    while (newInput !== "NoMoreMoney") {
        let newMoney = Number(newInput); // тази променлива запазва стойност от новияИнпут, когато вече е проверено (в уславието на цикъла), че новата стойност е число
        if (newMoney < 0) {              // проверка, дали числото не е отрицателно
            console.log(`Invalid operation!`);  // ако е, се изписва грешка
            break;                              // и се прекъсва цикъла
        }
        accountBallance += newMoney;            // новите пари се добавят към баланса на сметката
        console.log(`Increase: ${newMoney.toFixed(2)}`);  // излиза съобщение колко е новияИнпут

        newInput = input[index];  //натрупванe в сметката
        index++;
    }
    console.log(`Total: ${accountBallance.toFixed(2)}`); //тотал баланса
}
accountBalance([
    "5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);
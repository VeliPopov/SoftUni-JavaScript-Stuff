function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalPrice = puzzelCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let allTheToys = puzzelCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if (allTheToys >= 50) {
        totalPrice = 0.75 * totalPrice;     // ако вкарам нова променлива с LET е ТЪПА грешка!
    }

    let moneyEarnd = totalPrice;            // щом ще преименувам променливата - ПЪРВО ЗАПИСВАМ ИМЕТО НА НОВАТА ПРОМЕНЛИВА!
    moneyEarnd = 0.90 * moneyEarnd;

    if (moneyEarnd >= vacationPrice) {
        let neededSumm = moneyEarnd - vacationPrice;
        console.log(`Yes! ${neededSumm.toFixed(2)} lv left.`);
    } else {
        let watsLeft = vacationPrice - moneyEarnd;
        console.log(`Not enough money! ${watsLeft.toFixed(2)} lv needed.`);
    }

}

//toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);

// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. 
// От спечелените пари Петя трябва да даде 10% за наема на магазина. 
// Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.

// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

// Резултатът трябва да се форматира до втория знак след десетичната запетая.
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.


function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let discount = 0;

    let totalToysCount = puzzelCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let earnings = puzzelCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

    if (totalToysCount >= 50) {
        discount = earnings * 0.25;
    }

    let finalSumm = earnings - discount;
    let rent = finalSumm * 0.10;
    let profit = finalSumm - rent;

    if (profit >= vacationPrice) {
        let whatsLeft = profit - vacationPrice;
        console.log(`Yes! ${whatsLeft.toFixed(2)} lv left.`);
    }else {
        let watsNeeded = vacationPrice - profit;
        console.log(`Not enough money! ${watsNeeded.toFixed(2)} lv needed.`);
    }
}
//toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);



// 135 > 50 => 25% отстъпка; 25% от 680 = 170 лв. отстъпка
// Крайна цена: 680 – 170 = 510 лв.
// Наем: 10% от 510 лв. = 51 лв.
// Печалба: 510 – 51 = 459 лв.
// 459 > 40.8 => 459 – 40.8 = 418.20 лв. остават


// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]

// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.

// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.


function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let costOfClothing = Number(input[2]);

    let movieDecore = movieBudget * 0.1;
    let totalClothingCost = numberOfExtras * costOfClothing;

    if (numberOfExtras > 150) {
        totalClothingCost = 0.9 * totalClothingCost;
    }

    let totalExpenses = movieDecore + totalClothingCost;     // тази променлива трябва да е ЗАДЪЛЖИТЕЛНО след горната проверка
    //заради една от съставящите променливи (втората), за да може да се инициализира по долу в конзолата, иначе й взема старата стойност
    if (totalExpenses > movieBudget) {
        let moneyNeeded = totalExpenses - movieBudget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        okBudget = movieBudget - totalExpenses;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${okBudget.toFixed(2)} leva left.`);
    }

}
//godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
//godzillaVsKong(["9587.88","222","55.68"]);

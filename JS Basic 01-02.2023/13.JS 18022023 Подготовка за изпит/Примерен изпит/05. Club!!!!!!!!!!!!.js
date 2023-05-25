function club(input) {
    let index = 0;

    let targetProfit = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let income = 0;

    while (command !== 'Party!') {
        let cocktail = command;

        let cocktailCount = Number(input[index]);
        index++;

        let cocktailPrice = cocktail.length;
        let totalCocktailPrice = cocktailCount * cocktailPrice;

        if (totalCocktailPrice % 2 !== 0) {
            totalCocktailPrice *= 0.75;
        }

        income += totalCocktailPrice;

        if (income >= targetProfit) {
            console.log(`Target acquired.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Party!') {
        let neededSum = targetProfit - income;
        console.log(`We need ${neededSum.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);


}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"]);

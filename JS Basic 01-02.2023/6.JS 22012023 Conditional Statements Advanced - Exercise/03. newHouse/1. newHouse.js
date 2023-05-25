function newHouse(input) {
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    

    switch (flowers) {
        case 'Roses':
            price = 5;
            break;
        case 'Dahlias':
            price = 3.80;
            break;
        case 'Tulips':
            price = 2.80;
            break;
        case 'Narcissus':
            price = 3;
            break;
        case 'Gladiolus':
            price = 2.50;
            break;
    }
    if (flowers === 'Roses' && flowersCount > 80) {
        price *= 0.90;
    } else if (flowers === 'Dahlias' && flowersCount > 90) {
        price *= 0.85;
    } else if (flowers === 'Tulips' && flowersCount > 80) {
        price *= 0.85;
    } else if (flowers === 'Narcissus' && flowersCount < 120) {
        price *= 1.15;
    } else if (flowers === 'Gladiolus' && flowersCount < 80) {
        price *= 1.20;
    }

    let sum = flowersCount * price;
    

    if (sum <= budget) {
        let sumLeft = budget - sum;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${sumLeft.toFixed(2)} leva left.`);
    } else {
        let neededSum = sum - budget;
        console.log(`Not enough money, you need ${neededSum.toFixed(2)} leva more.`);
    }



}
newHouse(["Tulips",
"88",
"260"])




;


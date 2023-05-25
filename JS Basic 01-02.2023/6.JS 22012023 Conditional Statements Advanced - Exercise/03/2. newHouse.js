function newHouse(input) {
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

        switch (flowers) {
        case 'Roses':
            totalPrice = flowersCount * 5;
            break;
        case 'Dahlias':
            totalPrice = flowersCount * 3.80;
            break;
        case 'Tulips':
            totalPrice = flowersCount * 2.80;;
            break;
        case 'Narcissus':
            totalPrice = flowersCount * 3;
            break;
        case 'Gladiolus':
            totalPrice = flowersCount * 2.50;
            break;
    }
    if (flowers === 'Roses' && flowersCount > 80) {
        totalPrice *= 0.90;
    } else if (flowers === 'Dahlias' && flowersCount > 90) {
        totalPrice *= 0.85;
    } else if (flowers === 'Tulips' && flowersCount > 80) {
        totalPrice *= 0.85;
    } else if (flowers === 'Narcissus' && flowersCount < 120) {
        totalPrice *= 1.15;
    } else if (flowers === 'Gladiolus' && flowersCount < 80) {
        totalPrice *= 1.20;
    }
    if (totalPrice <= budget) {
        let sumLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${sumLeft.toFixed(2)} leva left.`);
    } else {
        let neededSum = totalPrice - budget;
        console.log(`Not enough money, you need ${neededSum.toFixed(2)} leva more.`);
    }



}
newHouse(["Tulips",
"88",
"260"])
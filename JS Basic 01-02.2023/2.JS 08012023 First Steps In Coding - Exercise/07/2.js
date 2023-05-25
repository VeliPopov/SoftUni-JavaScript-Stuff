// алтернативния по-кратък код!!

function foodDelivery(input) {
    let chickenMenusCount = Number(input[0]);
    let fishMenusCount = Number(input[1]);
    let veganMenusCount = Number(input[2]);

    let chickenMenusPrice = chickenMenusCount * 10.35;
    let fushMenusPrice = fishMenusCount * 12.40;
    let veganMenusPrice = veganMenusCount * 8.15;

    let totalMenuPrice = chickenMenusPrice + fushMenusPrice + veganMenusPrice;
    let dessertPrice = totalMenuPrice * 0.20;

    let totalOrderPrice = totalMenuPrice + dessertPrice + 2.50;
    console.log(totalOrderPrice);

}

foodDelivery(["9", "2", "6"]);
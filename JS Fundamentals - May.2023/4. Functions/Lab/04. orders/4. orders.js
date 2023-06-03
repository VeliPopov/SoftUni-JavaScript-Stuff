function orders(product, quantity) {

    let coffeeprice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    let totalPrice = 0;

    for (let i = 1; i <= quantity; i++) {
        if (product === 'coffee') {
            totalPrice += coffeeprice;
        } else if (product === 'water') {
            totalPrice += waterPrice;
        } else if (product === 'coke') {
            totalPrice += cokePrice;
        } else if (product === 'snacks') {
            totalPrice += snacksPrice;
        }
    }
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)


function orders(product, quantity) {
    let price;

    if (product === 'coffee') {
        price = 1.50;
    } else if (product === 'water') {
        price = 1.00;
    } else if (product === 'coke') {
        price = 1.40;
    } else if (product === 'snacks') {
        price = 2.00;
    // } else {
    //     console.log("Invalid product.");
    //     return;
    }

    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)

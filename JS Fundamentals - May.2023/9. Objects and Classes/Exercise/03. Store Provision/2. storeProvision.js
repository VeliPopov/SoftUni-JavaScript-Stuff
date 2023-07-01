function storeProvision(currentStock, orderedStock) {

    let store = {};

    for (let index = 0; index < currentStock.length; index += 2) {
        const product = currentStock[index];

        store[product] = Number(currentStock[index + 1]);
        
    }

    for (let index = 0; index < orderedStock.length; index += 2) {
        let product = orderedStock[index];

        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        } 
        store[product] += Number(orderedStock[index + 1]);
        
    }
    
    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
        
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7',
        'Tomatoes', '7', 'Bananas', '30'
    ])
function storage(params) {
    
    let items = new Map();

    for (let info of params) {
        let [item, quantity] = info.split(' ');

        quantity = Number(quantity);

        if (!items.has(item)) {
            items.set(item, quantity);
        } else {
            let currentQuantity = items.get(item);
            items.set(item, currentQuantity + quantity);
        }
    }

    for (let [item, quantity] of items) {
        console.log(`${item} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])

function furniture(input) {
    let totalMoney = 0;
    let furnitureBought = [];
    let pattern = />>([A-Za-z]+)<<(\d+\.?\d*)!(\d+)/;

    for (let line of input) {
        let match = pattern.exec(line);

        if (match) {
            let name = match[1];
            let price = Number(match[2]);
            let quantity = Number(match[3]);

            furnitureBought.push(name);
            totalMoney += price * quantity;
        }
    }

    console.log('Bought furniture:');

    if (furnitureBought.length > 0) {
        for (let item of furnitureBought) {
            console.log(item);
        }
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'])
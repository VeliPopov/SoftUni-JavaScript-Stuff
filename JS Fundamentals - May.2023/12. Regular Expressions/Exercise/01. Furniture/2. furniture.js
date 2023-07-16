function furniture(input) {

    let pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;

    let totalMoney = 0;

    console.log('Bought furniture:');


    for (let line of input) {
        let result = line.match(pattern);

        if (result) {
            let items = result.groups.name;
            let price = +result.groups.price;
            let count = +result.groups.quantity;
            // + парсва към число, ако е възможно -> същото е като Number(...)

            totalMoney += price * count;
            console.log(items);
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
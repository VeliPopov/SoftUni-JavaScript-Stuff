function barIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d*)\$/;
                  
    let totalIncome = 0;

    for (let line of input) {
        if (line === 'end of shift') {
            break;
        }
        let match = pattern.exec(line);
        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);

            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);

            totalIncome += totalPrice;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])

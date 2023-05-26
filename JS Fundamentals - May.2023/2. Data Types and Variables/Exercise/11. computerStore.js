function computerStore(input) {

    let priceWithoutTaxes = 0;

    let customerTipe = input[input.length - 1];

    for (let i = 0; i < input.length - 1; i++) {
        let currentPrice = Number(input[i]);
        
        if (currentPrice < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes += currentPrice;
        }
    }
    let totalPriceWithTaxes = priceWithoutTaxes * 1.20;
    let taxes = totalPriceWithTaxes - priceWithoutTaxes;

    if (customerTipe === 'special') {
        totalPriceWithTaxes *= 0.90;
    } 
    if (totalPriceWithTaxes === 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 
    'regular'
    ])
function travelAgency(input) {
    let town = input[0];
    let packetTipe = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let pricePerDay = 0;

    if (days < 1) {
        console.log(`Days must be positive number!`);
        return; //!
    }

    if (days > 7) {
        days -= 1;
    }

    switch (town) {
        case 'Bansko':
        case 'Borovets':
            if (packetTipe === 'noEquipment') {
                pricePerDay = 80;

                if (vip === 'yes') {
                    pricePerDay *= 0.95;
                }
            } else if (packetTipe === 'withEquipment') {
                pricePerDay = 100;

                if (vip === 'yes') {
                    pricePerDay *= 0.90;
                }
            } else {
                console.log(`Invalid input!`);
                return; //!
            }
            break;
        case 'Varna':
        case 'Burgas':
            if (packetTipe === 'noBreakfast') {
                pricePerDay = 100;

                if (vip === 'yes') {
                    pricePerDay *= 0.93;
                }
            } else if (packetTipe === 'withBreakfast') {
                pricePerDay = 130;

                if (vip === 'yes') {
                    pricePerDay *= 0.88;
                }
            } else {
                console.log(`Invalid input!`);
                return; //!
            }
            break;

        default:
            console.log(`Invalid input!`);
            return;

    }
    let totalPrice = pricePerDay * days;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);

}
travelAgency(["Varna",
"withBreakfast",
"yes",
"5"])












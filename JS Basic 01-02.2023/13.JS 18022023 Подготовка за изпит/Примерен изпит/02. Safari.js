function safary(input) {
    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let fuelPricePerLitre = 2.10;
    let fuelPrice = fuel * fuelPricePerLitre;
    let tourGuide = 100;

    let totalPrice = fuelPrice + tourGuide;

    if (day === 'Saturday') {
        totalPrice *= 0.90;
    } else if (day === 'Sunday') { //else
        totalPrice *= 0.80;
    }
    if (budget >= totalPrice) {
        let savedMoney = budget - totalPrice;
        console.log(`Safari time! Money left: ${savedMoney.toFixed(2)} lv.`);
    } else if (budget < totalPrice) {
        let moneyneeded = totalPrice - budget;
        console.log(`Not enough money! Money needed: ${moneyneeded.toFixed(2)} lv.`);
    }


}
safary(["1000", "10", "Sunday"]);
function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boatRental = 0;

    switch (season) {
        case "Spring":
            boatRental = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatRental = 4200;
            break;
        case "Winter":
            boatRental = 2600;
            break;
    }
    if (fishermen <= 6) {
        boatRental *= 0.90;
    } else if (fishermen <= 11) {
        boatRental *= 0.85;
    } else {
        boatRental *= 0.75;
    }
    if (fishermen % 2 === 0 && season !== "Autumn") {
        boatRental *= 0.95;
    }
    if (budget >= boatRental) {
        let moneyLeft = budget - boatRental;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = boatRental - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }


}
fishingBoat(["2000", "Winter", "13"]);




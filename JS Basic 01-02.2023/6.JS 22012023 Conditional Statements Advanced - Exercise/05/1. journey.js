function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = '';
    let destination = '';

    switch (season) {
        case 'summer':
            location = "Camp";
            break;
        case 'winter':
            location = "Hotel";
            break;
    }

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            price = 0.30 * budget;
        } else {
            price = 0.70 * budget;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            price = 0.40 * budget;
        } else {
            price = 0.80 * budget;
        }
    } else {
        destination = 'Europe';
        price = 0.90 * budget;
        location = "Hotel"
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${location} - ${price.toFixed(2)}`);

}
journey(["1500", "summer"]);




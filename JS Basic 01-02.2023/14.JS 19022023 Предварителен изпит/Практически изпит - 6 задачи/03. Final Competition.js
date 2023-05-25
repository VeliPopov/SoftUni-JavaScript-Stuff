function finalCompetition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let moneyReward = 0;

    switch (place) {
        case 'Bulgaria':
            moneyReward = points * dancers;

            if (season === 'summer') {
                moneyReward *= 0.95;
            } else {
                moneyReward *= 0.92;
            }

            break;
        case 'Abroad':
            moneyReward = (dancers * points) * 1.5;

            if (season === 'summer') {
                moneyReward *= 0.90;
            } else {
                moneyReward *= 0.85;
            }

            break;

    }
    
    let charity = moneyReward * 0.75;
    console.log(`Charity - ${charity.toFixed(2)}`);

    let moneyPerDancer = (moneyReward - charity) / dancers;
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);




}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

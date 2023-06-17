function blackFlag(params) {

    let days = Number(params[0]);
    let dailyPlunder = Number(params[1]);
    let targetPlunder = Number(params[2]);

    let plunder = 0;

    for (let index = 1; index <= days; index++) {
        plunder += dailyPlunder;

        if (index % 3 === 0) {
            plunder += dailyPlunder * 0.50;
        }
        // проверките трябва да са две отделни
        if (index % 5 === 0) {
            plunder *= 0.70;
        }
    }
    if (plunder >= targetPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = plunder / targetPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"])
blackFlag(["10", "20", "380"])
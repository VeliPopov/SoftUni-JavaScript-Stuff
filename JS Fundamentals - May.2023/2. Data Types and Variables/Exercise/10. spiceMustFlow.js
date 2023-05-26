function spiceMustFlow(yield) {

    let days = 0;
    let totalYield = 0;
    let dailyCrewRation = 26;

    while (yield >= 100) {
        days++;
        totalYield += yield - dailyCrewRation;
        yield -= 10;

    }
    if (yield <= 100 && totalYield >= dailyCrewRation) {
        totalYield -= dailyCrewRation;
    }
    console.log(days);
    console.log(totalYield);
}
spiceMustFlow(450)
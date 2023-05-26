function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalExpenses = 0;

    for (let fights = 1; fights <= lostFightsCount; fights++) {
        if (fights % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (fights % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (fights % 6 === 0) {
            totalExpenses += shieldPrice;
        }
        if (fights % 12 === 0) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)

//проверките са независими една от друга, тъй като по условие, има проверки, които са едновремено валидни - дават TRUE едновремено


// • Every second lost game, his helmet is broken.
// • Every third lost game, his sword is broken.
// • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// • Every second time, when his shield brakes, his armor also needs to be repaired. 
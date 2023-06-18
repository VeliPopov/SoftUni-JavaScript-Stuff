function experienceGaining(params) {
    let neededExp = Number(params.shift());
    let battles = Number(params.shift());
    // парсването към Number в конкретния случай не ми е нужно, тъй като от масива данните идват като числа
    let totalExp = 0;
    let battlesCount = 0;

    for (let index = 1; index <= battles; index++) {
        let currentBattleExp = Number(params.shift());
        battlesCount++;

        if (index % 3 === 0) {
            currentBattleExp *= 1.15;
        } 
        if (index % 5 === 0) {
            currentBattleExp *= 0.90;
        }
        if (index % 15 === 0) {
            currentBattleExp *= 1.05;
        }
        // може и с if else
        totalExp += currentBattleExp;

        if (totalExp >= neededExp) {
            console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
            return;
        }
    }

    console.log(`Player was not able to collect the needed experience, ${(neededExp - totalExp).toFixed(2)} more needed.`);
}
experienceGaining([500, 5, 50, 100, 200, 100, 30])
experienceGaining([500, 5, 50, 100, 200, 100, 20])
experienceGaining([400, 5, 50, 100, 200, 100, 20])

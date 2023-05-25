function fitnessCenter(input) {
    let gymVisitors = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for (let visitor = 1; visitor <= gymVisitors; visitor++) { //въртя посетителите
        let exercise = input[visitor]; // приемам стринг за вида трениравка на съответния посетител и правя проверка

        if (exercise === 'Back') {
            backCount++;
        } else if (exercise === 'Chest') {
            chestCount++;
        } else if (exercise === 'Legs') {
            legsCount++;
        } else if (exercise === 'Abs') {
            absCount++;
        } else if (exercise === 'Protein shake') {
            proteinShakeCount++;
        } else if (exercise === 'Protein bar') {
            proteinBarCount++;
        }
    }
    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);

    let percentageOfPeopleTraining = ((backCount + chestCount + legsCount + absCount) / gymVisitors) * 100;
    console.log(`${percentageOfPeopleTraining.toFixed(2)}% - work out`);

    let percentageOfPeopleForProtein = ((proteinBarCount + proteinShakeCount) / gymVisitors) * 100;
    console.log(`${percentageOfPeopleForProtein.toFixed(2)}% - protein`);

}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])


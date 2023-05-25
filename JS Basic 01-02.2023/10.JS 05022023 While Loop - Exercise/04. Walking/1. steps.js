function walking(input) {
    let index = 0;

    let currentSteps = input[index];
    index++;

    let totalSteps = 0;

    while (currentSteps !== 'Going home') {
        currentSteps = Number(currentSteps) //докато не дойде командата за край на цикъла, приемам, че стойността на променливата ще е числова стойност
        
        totalSteps += currentSteps;

        if (totalSteps >= 10000) {
            let overkill = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${overkill} steps over the goal!`);
            break;
        }

        currentSteps = input[index];
        index++;
    }

    if (currentSteps === 'Going home') {

        let finalSteps = totalSteps + Number(input[index]);
        if (finalSteps > 10000) {
            let overkill2 = finalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${overkill2} steps over the goal!`);
        } else {
            let neededSteps = 10000 - finalSteps;
            console.log(`${Math.abs(neededSteps)} more steps to reach goal.`);
        }
    }

}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);
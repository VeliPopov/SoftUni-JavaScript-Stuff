function trekkingMania(input){
    let groupsOfClimbers = Number(input[0]);

    let totalClimbersCount = 0;  //груба грешка да хардкодна тази променлива, така ще работи правилно само в този случай - само с тези данни
    let totalGroups1 = 0;
    let totalGroups2 = 0;
    let totalGroups3 = 0;
    let totalGroups4 = 0;
    let totalGroups5 = 0;

    for (let i = 1; i <= groupsOfClimbers; i++) {
        let climbersInGroup = Number(input[i]); 
        totalClimbersCount += climbersInGroup; //така е правилно!
        
                 
        if (climbersInGroup <= 5) {
            totalGroups1 += climbersInGroup; // така имам не само броя на групите, до определен брой членове, но и броя на хората във всяка група
        } else if (climbersInGroup <= 12) {
            totalGroups2 += climbersInGroup;
        } else if (climbersInGroup <= 25) {
            totalGroups3 += climbersInGroup;
        } else if (climbersInGroup <= 40) {
            totalGroups4 += climbersInGroup;
        } else {
            totalGroups5 += climbersInGroup;
        }
    }

        let group1Percent = (totalGroups1 / totalClimbersCount) * 100;  
        let group2Percent = (totalGroups2 / totalClimbersCount) * 100;
        let group3Percent = (totalGroups3 / totalClimbersCount) * 100;
        let group4Percent = (totalGroups4 / totalClimbersCount) * 100;
        let group5Percent = (totalGroups5 / totalClimbersCount) * 100;  
        
        console.log(`${group1Percent.toFixed(2)}%`);
        console.log(`${group2Percent.toFixed(2)}%`);
        console.log(`${group3Percent.toFixed(2)}%`);
        console.log(`${group4Percent.toFixed(2)}%`);
        console.log(`${group5Percent.toFixed(2)}%`);

}
trekkingMania([
"10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);
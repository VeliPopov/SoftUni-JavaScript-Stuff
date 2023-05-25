function easterCompetition(input) {
    let index = 0;

    let sweetBreadCount = Number(input[index]);
    index++;

    let maxGrade = 0;
    let bestBaker = '';

    for (let currentSweetBread = 1; currentSweetBread <= sweetBreadCount; currentSweetBread++) {
        let bakerName = input[index];
        index++;

        let command = input[index];
        index++;

        let finalGrade = 0;

        while(command !== 'Stop') {
            let grade = Number(command);

            finalGrade += grade;

            command = input[index];
            index++;
        }

        console.log(`${bakerName} has ${finalGrade} points.`);

        if (finalGrade > maxGrade) {
            maxGrade = finalGrade;
            bestBaker = bakerName;
            console.log(`${bakerName} is the new number 1!`);
        }
    }
    console.log(`${bestBaker} won competition with ${maxGrade} points!`);


}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);
function trainTheTrainers(input) {
    let index = 0;

    let gradesCount = Number(input[0]);
    index++;
    
    let command = input[index];
    index++;

    let totalGradesSum = 0;
    let presentationsCount = 0;

    while (command !== 'Finish') {
        let presentation = command;

        let gradesSum = 0;

        for (let grade = 1; grade <= gradesCount; grade++) {
            let currentGrade = Number(input[index]);
            index++;

            gradesSum += currentGrade;

        }

        let avgGrade = gradesSum / gradesCount;
        console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);

        totalGradesSum += avgGrade;
        presentationsCount++;

        command = input[index];
        index++;

    }
    let totalAvgGrade = totalGradesSum / presentationsCount; 
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);

}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
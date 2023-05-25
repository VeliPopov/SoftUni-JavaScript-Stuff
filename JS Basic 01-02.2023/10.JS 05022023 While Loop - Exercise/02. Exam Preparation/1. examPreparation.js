function examPreparation(input) {
    let index = 0;

    let poorGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;
    let problemGrade = Number(input[index]);
    index++
    let poorGradesCounter = 0;
    let gradesCounter = 0;
    let gradesSum = 0;

    let lastProblem = '';

    while (problemName !== 'Enough') {
        lastProblem = problemName;
        if (problemGrade <= 4) {
            poorGradesCounter++;
        }
        if (poorGradesCounter === poorGrades) {
            console.log(`You need a break, ${poorGradesCounter} poor grades.`);
            break; //прекратява само цикъла (без кода под него), а не цялата функция като return
        }

        gradesCounter++;
        gradesSum += problemGrade;

        problemName = input[index];
        index++;
        problemGrade = Number(input[index]);
        index++;

    }

    if (problemName === 'Enough') {  //проверката е нужна заради това, че използвам break при предишната проверка
        let avgGrade = gradesSum / gradesCounter;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);

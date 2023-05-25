function examPreparation(input) {
    let index = 0;

    let poorGrades = Number(input[index]); //число е - щото е 0-левия индекс
    index++; //към 1

    let problemName = input[index]; //index 1 (името на задачата)
    index++; //към 2
    let problemGrade = Number(input[index]); //index 2 (оценката)
    index++ //към 3
    let poorGradesCounter = 0;
    let gradesCounter = 0;
    let gradesSum = 0;

    let lastProblem = ''; //запсва последната задача

    while (problemName !== 'Enough') { //кагато това усавие стане false (дойде 'Enough') се break-ва и НЕ се изпълнява кода (цикъла) отдолу, И ТАКА НЕ СЕ ЪПДЕЙТВА стойността на lastProblem
        lastProblem = problemName; //и така дава коректното име на задача в последната конзола 
        if (problemGrade <= 4) {
            poorGradesCounter++; //ако текущата оценка е <= 4, запиши я тук (брой я тук)
        }
        if (poorGradesCounter === poorGrades) {
            console.log(`You need a break, ${poorGradesCounter} poor grades.`);
            return; //ако се изпълни уславието, чрез тази проверка, return прекратява изпълнението на функцията - на целия код отдолу (на всички проверки) - край на задачата
        }

        gradesCounter++;
        gradesSum += problemGrade;

        problemName = input[index]; //искам вече нов "problem" 
        index++;
        problemGrade = Number(input[index]); //искам и следващата съответната оценка
        index++;

    }
    //тук няма проверка за if (problemName === 'Enough') - заради return-а горе - ако ползвам break е АБСОЛЮТНО задължителна тази проверка
    let avgGrade = gradesSum / gradesCounter;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCounter}`);
    console.log(`Last problem: ${lastProblem}`);


}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

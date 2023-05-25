function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
    let numberOfEvaluators = Number(input[2]);

    let grade = 0;

    for (let i = 3; i < input.length; i += 2) {  //прескача през индекс -> от индекс 3 на индекс 5, на индекс 7 и тн.
        let evaluatorName = input[i];
        let evaluatorNamePoints = evaluatorName.length;
        let evaluatorgrade = Number(input[i + 1]); //отива на точките, които са на следващия индекс, след името

        grade = (evaluatorNamePoints * evaluatorgrade) / 2;
        points += grade;

        if (points >= 1250.5) {
            break;   //прекъсва изпълнението на цикъла, при достигане на определено условие
        }
    }
    if (points >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }
}
oscars
    (["Sandra Bullock",
        "340",
        "5",
        "Robert De Niro",
        "50",
        "Julia Roberts",
        "40.5",
        "Daniel Day-Lewis",
        "39.4",
        "Nicolas Cage",
        "29.9",
        "Stoyanka Mutafova",
        "33"]);

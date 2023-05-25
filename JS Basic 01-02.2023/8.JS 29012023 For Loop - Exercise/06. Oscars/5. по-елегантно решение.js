function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfJudges = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) { //итерираме само до последния индекс //! за да използвам и numberOfJudges променливата, трябва да дефинирам крайната стойност на цикъла по този начин: (i <= numberOfJudges * 2 + 2)
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        let pointsWon = judgeName.length * judgePoints / 2; // може умножението да е в (), а може и не
        academyPoints += pointsWon; //директно сумирам точките в първоначалните зададени - така си спестявам дефинирането на няколко (поне две) допълнителни променливи

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoints <= 1250.5) {
        let pointsNeeded = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
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
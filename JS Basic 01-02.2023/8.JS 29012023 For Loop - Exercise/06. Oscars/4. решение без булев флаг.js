//FIXME: работи
//FIXME: работи и без флага (логическото отрицание)

function oscars(input) {
    let index = 0;

    let actorName = input[index];
    index++;

    let points = Number(input[index]);
    index++;

    let numberOfEvaluators = Number(input[index]);
    index++;

    for (let i = 0; i < numberOfEvaluators; i++) {
        let evaluatorName = input[index];
        index++;
        let evaluatorgrade = Number(input[index]);
        index++;

        points += (evaluatorName.length * evaluatorgrade) / 2;

        if (points > 1250.5) {
            break;
        }
    }
    if (points > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - points).toFixed(1)} more!`);
    }

}
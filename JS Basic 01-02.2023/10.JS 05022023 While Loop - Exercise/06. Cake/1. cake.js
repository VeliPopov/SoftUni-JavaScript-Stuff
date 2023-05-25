function cake(input) {
    let index = 0;

    let width = Number(input[index]); //0
    index++;
    let length = Number(input[index]); //1
    index++;

    let command = input[index]; //2
    index++;

    let totalPieces = width * length;

    while (command !== 'STOP') {
        let cakePieces = Number(command); //това нещо важи само ако command има числова стойност

        totalPieces -= cakePieces;

        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'STOP') {
        console.log(`${totalPieces} pieces are left.`);
    }

}
cake([
    "10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);

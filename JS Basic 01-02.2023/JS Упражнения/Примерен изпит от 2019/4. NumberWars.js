function solve(input) {
    let index = 0;
 
    let firstPlayer = input[index];
    index++;
 
    let secondPlayer = input[index];
    index++;
 
    let command = input[index];
    index++;
 
    let player1Total = 0;
    let player2Total = 0;
 
    while (command !== "End of game") {
        let firstPlayerCard = Number(command);
        let secondPlayerCard = Number(input[index]);
        index++;
 
        if (firstPlayerCard > secondPlayerCard) {
 
            player1Total += firstPlayerCard - secondPlayerCard;
        } else if (secondPlayerCard > firstPlayerCard) {
 
            player2Total += secondPlayerCard - firstPlayerCard;
        } else {
            console.log('Number wars!');
 
            firstPlayerCard = Number(input[index]);
            index++;
            secondPlayerCard = Number(input[index]);
 
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${player1Total} points`)
            } else {
                console.log(`${secondPlayer} is winner with ${player2Total} points`)
            }
            break;
        }
        command = input[index];
        index++;
    }
 
    if (command == 'End of game') {
 
        console.log(`${firstPlayer} has ${player1Total} points`)
        console.log(`${secondPlayer} has ${player2Total} points`)
    }
 
}
 
solve(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"])
console.log('-----');
solve(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"])
console.log(`------`);
solve(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"])
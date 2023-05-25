function solve(input) {
 
    let match1 = input[0];
    let match1Team1 = Number(match1[0]);
    let match1Team2 = Number(match1[2]);
 
    let match2 = input[1];
    let match2Team1 = Number(match2[0]);
    let match2Team2 = Number(match2[2]);
 
    let match3 = input[2];
    let match3Team1 = Number(match3[0]);
    let match3Team2 = Number(match3[2]);
 
    // counters
    let victories = 0;
    let losts = 0;
    let drawns = 0;
 
    // match 1
    if (match1Team1 > match1Team2) {
        victories++;
    } else if (match1Team1 == match1Team2) {
        drawns++;
    } else if (match1Team1 < match1Team2) {
        losts++;
    }
 
    // match 2
    if (match2Team1 > match2Team2) {
        victories++;
    } else if (match2Team1 == match2Team2) {
        drawns++;
    } else if (match2Team1 < match2Team2) {
        losts++;
    }
 
    // match 3
    if (match3Team1 > match3Team2) {
        victories++;
    } else if (match3Team1 == match3Team2) {
        drawns++;
    } else if (match3Team1 < match3Team2) {
        losts++;
    }
 
    console.log(`Team won ${victories} games.`);
    console.log(`Team lost ${losts} games.`)
    console.log(`Drawn games: ${drawns}`)
}
 
solve(["4:2", "0:3", "1:0"]);
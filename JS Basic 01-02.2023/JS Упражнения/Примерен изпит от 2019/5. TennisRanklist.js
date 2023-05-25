function solve(input) {
 
    let n = Number(input[0]); // брой турнири 
    let startingPoints = Number(input[1]);
 
    let winsCount = 0;
    let totalPoints = 0;
    let position = "";
 
 
    for (let i = 2; i < input.length; i++) {
        position = input[i];
 
        switch (position) {
            case "W":
                totalPoints += 2000;
                winsCount++;
                break;
            case "F": totalPoints += 1200; break;
            case "SF": totalPoints += 720; break;
        }
 
    }
 
    console.log(`Final points: ${totalPoints + startingPoints}`);
 
    let average = totalPoints / n;
    console.log(`Average points: ${Math.floor(average)}`);
 
    let percent = (winsCount / n) * 100;
    console.log(`${percent.toFixed(2)}%`);
}
 
solve(["5", "1400", "F", "SF", "W", "W", "SF"])
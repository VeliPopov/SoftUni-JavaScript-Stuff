function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let extraPoints = 0;
    let winsCount = 0;
    //променливата с winRate-а го дефинирам директно долу, а не му задавам първоначална стойност 0, тук
    //и в двата случая работи на 100/100
    
    for (let i = 0; i < tournamentsCount; i++) {
        let result = input[i + 2]

        switch (result) {
            case 'W':
                extraPoints += 2000;
                winsCount++;
                break;
            case 'F':
                extraPoints += 1200;
                break;
            case 'SF':
                extraPoints += 720;
                break;
        }
    }
    let finalPoints = initialPoints + extraPoints;
    let averagePoints = extraPoints / tournamentsCount;
    let winRate = (winsCount / tournamentsCount) * 100;
   
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winRate.toFixed(2)}%`);

}
tennisRanklist([
"7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);
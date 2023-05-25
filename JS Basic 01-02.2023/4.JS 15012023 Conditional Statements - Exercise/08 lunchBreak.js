function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLenght = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let lunchTime = (1 / 8) * breakDuration;
    let restTime = (1 / 4) * breakDuration;    //ЗАПОМНИ как се включват шибаните дроби

    let committedTime = lunchTime + restTime;
    let movieTime = breakDuration - committedTime;

    if (movieTime >= episodeLenght) {
        //let freeTime = Math.ceil(movieTime - episodeLenght);   може и така
        let freeTime = movieTime - episodeLenght;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        //let neededTime = Math.ceil(episodeLenght - movieTime);  може и така
        let neededTime = episodeLenght - movieTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);
//lunchBreak(["Teen Wolf", "48", "60"]);





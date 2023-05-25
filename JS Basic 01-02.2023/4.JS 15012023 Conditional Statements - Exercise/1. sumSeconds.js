function sumSeconds(input) {
    let timeOne = Number(input[0]);
    let timeTwo = Number(input[1]);
    let timeThree = Number(input[2]);

    let overallTime = timeOne + timeTwo + timeThree;
    let minutes = Math.trunc(overallTime / 60);
    let seconds = overallTime % 60;
   
    if (seconds < 10) {   // "АКО МИНУТИТЕ СА ПО-МАЛКО ОТ 10 - ИСКАМ ДА СЛОЖИШ ЕДНА НУЛА ПРЕДИ ТЯХ"
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }


}
sumSeconds(["50", "50", "49"]);

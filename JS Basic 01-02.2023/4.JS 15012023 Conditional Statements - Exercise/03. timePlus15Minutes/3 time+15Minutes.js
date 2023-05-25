function minutesPlus15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15;
    let finalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = totalMinutes % 60;

    if (finalHours >= 24) {
        finalHours = 0;
    }
    if (finalMinutes < 10) {   // "АКО МИНУТИТЕ СА ПО-МАЛКО ОТ 10 - ИСКАМ ДА СЛОЖИШ ЕДНА НУЛА ПРЕДИ ТЯХ"
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`);
    }

}

minutesPlus15(["1", "46"]);


 
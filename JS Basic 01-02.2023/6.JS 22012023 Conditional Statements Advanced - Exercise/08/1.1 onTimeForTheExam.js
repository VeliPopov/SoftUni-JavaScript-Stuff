function onTimeForTheExam(input) {
    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examInMinutes = examHours * 60 + examMinutes;
    let arrivalInMinutes = arrivalHours * 60 + arrivalMinutes;

    let totalTime = Math.abs(examInMinutes - arrivalInMinutes);
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

    if (hours > 0 && minutes < 10) {   //прави се обща проверка за минутите и ако са по-малко от 10 им прибавя нула - важи за всички проверки
        minutes = `0${minutes}`;
    }

    if (examInMinutes === arrivalInMinutes) {
        console.log('On time');
    } else if (examInMinutes < arrivalInMinutes) {
        console.log('Late');

        if (totalTime < 60) {
            console.log(`${totalTime} minutes after the start`);
        } else {
            console.log(`${hours}:${minutes} hours after the start`);
        }
    } else {
        if (examInMinutes > arrivalInMinutes) {
            if (totalTime <= 30) {
                console.log(`On time`);
                console.log(`${totalTime} minutes before the start`);
            } else {
                console.log(`Early`);
                if (totalTime < 60) {
                    console.log(`${totalTime} minutes before the start`);
                } else {
                    console.log(`${hours}:${minutes} hours before the start`);
                }
            }

        }

    }
}
onTimeForTheExam(["9", "30", "9", "50"]);
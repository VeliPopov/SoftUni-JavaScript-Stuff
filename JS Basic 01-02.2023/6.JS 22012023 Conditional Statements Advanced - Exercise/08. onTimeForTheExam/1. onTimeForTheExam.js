function onTimeForTheExam(input) {
   let examHours = Number(input[0]);
   let examMinutes = Number(input[1]);
   let arrivalHours = Number(input[2]);
   let arrivalMinutes = Number(input[3]);

   let examInMinutes = examHours * 60 + examMinutes;  // превръща времето на изпита в минути
   let arrivalInMinutes = arrivalHours * 60 + arrivalMinutes; // превръща врмето на пристигане в минути

   let totalTime = Math.abs(examInMinutes - arrivalInMinutes); // връща РАЗЛИКАТА от врмето на изпита и времето на пристигане
   //Math.abs - връща абсолютната стойност на резултата в положително число - в случая стойността на разликата
   // при резултат 5 връща резултат 5
   // при резултат 120 връща резултат 120
   // при резултат -80 връща резултат 80
   let hours = Math.floor(totalTime / 60);  //получавам стойност за часа
   let minutes = totalTime % 60;  //получавам стойност за минутите


    // надолу следват проверки    
   if (examInMinutes === arrivalInMinutes) {
        console.log('On time');
    } else if (examInMinutes < arrivalInMinutes) {
        console.log('Late');

        if (totalTime < 60) {
            console.log(`${totalTime} minutes after the start`);
        } else {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
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
                    if (minutes < 10) {
                        console.log(`${hours}:0${minutes} hours before the start`);
                    } else {
                        console.log(`${hours}:${minutes} hours before the start`);
                    }
                }
            } 
            
        }

    }
} 
onTimeForTheExam(["9", "30", "9", "50"]);

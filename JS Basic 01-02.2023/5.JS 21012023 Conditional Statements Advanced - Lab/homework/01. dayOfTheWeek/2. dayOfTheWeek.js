function dayOfTheWeek(input) {
    let day = Number(input[0]);

    switch (day) {
        case 1: console.log("Monday"); break;
        // ако, стойността, която получи switch e 1, то тогава изпълти този код; край;
        // проверява по стойност и тип
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Error"); break;                   //трябва да го затвориш накрая
    }

}
//dayOfTheWeek(["1"])
//dayOfTheWeek(["2"]);
//dayOfTheWeek(["3"]);
//dayOfTheWeek(["4"]);
//dayOfTheWeek(["5"]);
//dayOfTheWeek(["6"]);
//dayOfTheWeek(["7"]);
dayOfTheWeek(["-1"]);


// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday
// Error

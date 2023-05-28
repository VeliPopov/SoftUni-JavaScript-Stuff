function dayOfWeek(day) {

    let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    let currentDay = dayOfTheWeek[day - 1];
    let tomorrow = dayOfTheWeek[day];
    let dayAfterTomorrow = dayOfTheWeek[day + 1];

    console.log(currentDay);
    console.log(tomorrow);
    console.log(dayAfterTomorrow);

}
dayOfWeek(4)
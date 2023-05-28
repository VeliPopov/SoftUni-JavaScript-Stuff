function dayOfWeek(day) {

    let dayOfTheWeek = [undefined, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    //undefined is faulse - затова при извикване на неговия индекс директно влиза в else-a
    let currentDay = dayOfTheWeek[day];

    if (currentDay) {
        console.log(currentDay);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(6)
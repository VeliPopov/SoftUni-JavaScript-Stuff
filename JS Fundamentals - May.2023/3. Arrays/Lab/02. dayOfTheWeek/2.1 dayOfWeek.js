function dayOfWeek(day) {

    let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let currentDay = dayOfTheWeek[day - 1];

    if (currentDay) {
        console.log(currentDay);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(11)

//най-доброто решение
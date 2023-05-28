function dayOfWeek(day) {

    let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
        console.log(dayOfTheWeek[day - 1]);
        //days[day - 1] взима елемента от масива, но връща назад с 1 от подадения параметър, защото индекса започва от 0
        //ако не го направи ще върне Thursday
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(7)
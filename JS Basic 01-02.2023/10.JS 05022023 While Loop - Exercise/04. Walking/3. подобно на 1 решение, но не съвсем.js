function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalSteps = 0;

    while (command !== 'Going home') {
        let steps = Number(command); // дефинирам нова променлива - конвертирам "стринговата стойност" на command в число //! предполагам, че не се бърка от променливата със същото име на ред 26, тъй като онази е извън тялато на този цикъл??
                
        totalSteps += steps; // сумирам всички итерации на цикъла

        if (totalSteps >= 10000) { //проверка
            let stepsMore = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }

        command = input[index]; //повиквам нова итерация на цикъла
        index++;
    }

    if (command === 'Going home') {
        let steps = Number(input[index]); //не се пише = Number(command) - тъй като command вече е дефинирана като стринг!
        // index++; //todo: принципно е добре да го има, но в този конкретен случай е излишно, тъй като знам, че ще има взет само един елемент от масива

        totalSteps += steps;

        if (totalSteps >= 10000) {
            let stepsMore = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsMore} steps over the goal!`);
        } else {
            let neededSteps = 10000 - totalSteps;
            console.log(`${neededSteps} more steps to reach goal.`);
        }
    }

}
walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);
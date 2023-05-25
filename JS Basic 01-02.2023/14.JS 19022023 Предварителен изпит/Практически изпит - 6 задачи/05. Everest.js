function everest(input) {
    let index = 0;

    let command = input[index];
    index++;

    let daysPast = 1;
    let meters = 5364;

    while (command !== 'END') {
        let metersPerDay = Number(input[index]);
        index++

        if (command === 'Yes') {
            daysPast++;

            if (daysPast > 5) {
                console.log(`Failed!`);
                console.log(`${meters}`);
                break;
            }
        }

        meters += metersPerDay;

        if (meters >= 8848) {
            console.log(`Goal reached for ${daysPast} days!`);
            break;
        }

        command = (input[index]);
        index++;
    }

    if (command === 'END') {
        if (meters >= 8848) {
            console.log(`Goal reached for ${daysPast} days!`);
        } else {
            console.log(`Failed!`);
            console.log(`${meters}`);
        }
    }


}
everest(["Yes",
"700",
"END"])




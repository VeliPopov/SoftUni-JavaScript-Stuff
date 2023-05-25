function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidTicketsCount = 0;

    while (command !== 'Finish') { //команда за основния цикъл
        let movie = command; // ако командата не е Finish, значи е име на филм - затова й сменям името, за ад ми е по-ясно, когато работя с нея

        let freeSeats = Number(input[index]); //свободните места - втория елемент от инпута
        index++;

        let nextCommand = input[index]; // командата за вътрешния цикъл
        index++;

        let seatsTaken = 0;

        while (nextCommand !== 'End') {
            let ticketType = nextCommand; // ново име (по-удачно), съобразено с возможната нова команда

            if (ticketType === 'student') {
                studentTicketsCount++;
            } else if (ticketType === 'standard') {
                standardTicketsCount++;
            } else if (ticketType === 'kid') { //else
                kidTicketsCount++;
            }
            seatsTaken++;

            if (seatsTaken === freeSeats) {
                break;
            }

            nextCommand = input[index];
            index++;
            
        }
        let percentFull = (seatsTaken / freeSeats) * 100;
        console.log(`${movie} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }
    let totalTickets = studentTicketsCount + standardTicketsCount + kidTicketsCount;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTicketsCount / totalTickets) * 100;
    let standartTicketsPercent = (standardTicketsCount / totalTickets) * 100;
    let kidTicketsPercent = (kidTicketsCount / totalTickets) * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);
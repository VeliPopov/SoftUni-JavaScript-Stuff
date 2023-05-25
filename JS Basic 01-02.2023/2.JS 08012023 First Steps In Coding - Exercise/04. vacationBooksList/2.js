function vacationBooksList(input) {

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let readingDays = Number(input[2]);

    let readingSpeed = readingDays * pagesPerHour;
    let hoursPerDay = bookPages / readingSpeed;
    console.log(hoursPerDay);
}

vacationBooksList (["432 ", "15", "4"]);
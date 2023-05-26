function requiredReading(pages, pagesPerHour, days) {
       
    let readingTime = pages / pagesPerHour;
    let hoursPerDay = readingTime / days;

    console.log(hoursPerDay);

}
requiredReading(432, 15, 4)

    // Total time to read the book: 212 pages / 20 pages per hour = 10.6 hours
    // Required hours per day: 10.6 hours / 2 days = 5.3 hours per day
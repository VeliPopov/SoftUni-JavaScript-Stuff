// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
// 2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// 3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]


// Да се отпечата на конзолата броят часове, които Жоро трябва да отделя за четене всеки ден.


function vacationBooksList(input) {

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let readingDays = Number(input[2]);


    let hoursPerDay = bookPages / (readingDays * pagesPerHour);
    console.log(hoursPerDay);

}

vacationBooksList (["432 ", "15", "4"]);

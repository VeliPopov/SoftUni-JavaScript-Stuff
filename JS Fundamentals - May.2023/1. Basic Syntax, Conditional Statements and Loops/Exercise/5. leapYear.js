function leapYear(year) {

    let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    //обърни внимание на скобите

    if (isLeap) {      //ако (уславието в скобите) е true - изпълни кода, ако не е - изпълни втория код
        console.log('yes');
    } else {
        console.log('no');
    }
}
leapYear(2024)
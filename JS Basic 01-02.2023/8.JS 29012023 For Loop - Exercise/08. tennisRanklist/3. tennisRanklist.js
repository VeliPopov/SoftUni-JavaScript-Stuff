function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let extraPoints = 0;
    let winsCount = 0;
    
    for (let i = 2; i < input.length; i++) {  //!така с input.length дава грешка на 0-вия тест, но минава със 100 от 100 в judge
        //! започва от 2-рия индекс
        //* input.length - проверява цялата дължина на масива
        //*започни от втория индекс и взимай елементи, докато нe стигнеш до последния
        let result = input[i] //няма + 2, тъй като гори започвам от 2-ри индекс
 
        if (result === 'W') {
            extraPoints += 2000;
            winsCount++;
        } else if (result === 'F') {
            extraPoints += 1200;
        } else {
            extraPoints += 720;
        }
    }
    let finalPoints = extraPoints + initialPoints;
    let averagePoints = Math.floor(extraPoints / tournamentsCount); //май Math.floor е по-добре да се сложи тук?
    let winRate = (winsCount / tournamentsCount) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winRate.toFixed(2)}%`);
}
tennisRanklist([
    "5",     //0
    "1400",  //1
    "F",     //2
    "SF",    //3
    "W",     //4
    "W",     //5
    "SF"     //6
    //общо са 7 индекса, но реалната дължина е 6, затова не се пише горе <=, а само <
    //ако искам да сложа и = трябва да сложа и + 1
]);
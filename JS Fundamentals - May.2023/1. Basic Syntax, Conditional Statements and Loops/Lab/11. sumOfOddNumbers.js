function sumOfOddNumbers(n) {

    let sum = 0;
    let counter = 0;   
    //неизвестни са и двете със сумата

    for (let i = 1; i <= 100; i += 2) {    
        //i е  просто индекс, който се върти в цикъла, не е нужно да го дефинирам във връзка с входните данни
        console.log(i);

        counter++;  // броя итерациите на индекса
        sum += i;   //сумирам стойностите
        if (counter === n) {  //тук ограничавам резултата - взимма само този брой итерации, които са ми нужни
            console.log(`Sum: ${sum}`);
            break;        //трябва да е в цикъла, за да го прекъсне, когато трябва
        }
    }
   
}
sumOfOddNumbers(3)
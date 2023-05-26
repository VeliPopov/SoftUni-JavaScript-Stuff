function multiplicationTable(number) {

    for (let times = 1; times <= 10; times++) {

        console.log(`${number} X ${times} = ${number * times}`);
        //ако конзолата е ВЪТРЕ в тялото на цикъла, ще ми принтира резултат от всяка една итерация
    }
}
multiplicationTable(7)
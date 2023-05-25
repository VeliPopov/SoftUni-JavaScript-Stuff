function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false; //първоначално намерено ли е магическото число? не. затова се маркира с false flsg

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            counter++; // брои итерациите на този цикъл
            if (x + y === magicNumber) {
                isFound = true; //тук се намира числото, затова тук се слага (вдига) флага
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break; // този бреак и проверката с него, са нужн за да прекъснат действието на външния цикъл (за да ми даде само търсения резултат, а не всички възможни)
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["88",
    "888",
    "2000"]);




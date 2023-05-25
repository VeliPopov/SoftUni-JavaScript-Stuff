function building(input) {
    let x = Number(input[0]); //брой етажи
    let y = Number(input[1]); //брой стаи на всеки етаж

    for (let a = x; a > 0; a--) { //а е по-голямо от 0, тъй като етажите са до първи, а декраментираме тъй като вървим от горе надолу
        let buffer = ''; // каквото напиша във for цикъла ще се създава отново и отново за всяка итерация; когато приклчи за съответния етаж, буфера ще занули своята стойност - ще се създаде отново и ще бъде празен
        for (let b = 0; b < y; b++) {        //b e стаите - цикъла проверява броя на стаите на всеки етаж
            if (a === x) {
                buffer += 'L' + a + b + ' ';  //буфера е склад за стойност - събираш стойнсти в него и наведнъж ги отпечатваш
            } else if (a % 2 === 0) {        //четен етаж
                buffer += 'O' + a + b + ' ';
            } else {                         //нечетен етаж
                buffer += 'A' + a + b + ' ';
            }
        }
        console.log(buffer);
    }

}
building(["6", "4"]);

// let floors = Number(input[0]);
// let rooms = Number(input[1]);
// for (let i = floors; i >= 1; i--) {
//   let printLine = "";
//   for (let j = 0; j < rooms; j++) {
//     if (i == floors)
// 	printLine += `L${i}${j} `;
//     // TODO: print according to floor number
//   }
//   console.log(printLine);
// }

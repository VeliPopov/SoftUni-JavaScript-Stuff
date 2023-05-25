function building(input) {
    let floors = Number(input[0]); //брой етажи
    let rooms = Number(input[1]); //брой стаи на всеки етаж

    for (let a = floors; a > 0; a--) { 
        let roomNumbers = ''; 
        for (let b = 0; b < rooms; b++) {        
            if (a === floors) {
                roomNumbers += 'L' + a + b + ' ';  
            } else if (a % 2 === 0) {        //четен етаж
                roomNumbers += 'O' + a + b + ' ';
            } else {                         //нечетен етаж
                roomNumbers += 'A' + a + b + ' ';
            }
        }
        console.log(roomNumbers);
    }

}
building(["6", "4"]);
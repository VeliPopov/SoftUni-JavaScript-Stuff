function moving(input) {
    let index = 0;

    let width = Number(input[index]); //0
    index++;
    let length = Number(input[index]);//1
    index++;
    let height = Number(input[index]);//2
    index++;

    let apartmentVolume = width * length * height;

    let command = input[index]; //3 - използва са команд, тъй като новия инпут не е само числа, но може да бъде и дург вид команда (Готово)
    index++;

    while (command !== 'Done') {
        // command = Number(command) 
        let boxesCount = Number(command); //командата се заменя с нова променлива

        apartmentVolume -= boxesCount; //намаляваме обема на жилището - от общия обем, вадим обема на внесените кашони (един кашон е един кубичен метър по условие)
        if (apartmentVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`);
            break;
        }

        command = input[index]; //това винаги следва - изискваме нови инпут, от нов индекс
        index++;
    }

    if (command === 'Done') {
        console.log(`${apartmentVolume} Cubic meters left.`);
    }

}
moving([
    "10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
]);

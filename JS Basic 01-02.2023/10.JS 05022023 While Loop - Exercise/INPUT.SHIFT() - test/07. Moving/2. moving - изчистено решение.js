function moving(input) {
    let index = 0;

    let width = Number(input[index]); //0
    index++;
    let length = Number(input[index]);//1
    index++;
    let height = Number(input[index]);//2
    index++;

    let apartmentVolume = width * length * height;

    let command = input[index];
    index++;

    while (command !== 'Done') {
        let boxesCount = Number(command);

        apartmentVolume -= boxesCount;
        if (apartmentVolume <= 0) {
            console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`);
            break;
        }

        command = input[index];
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
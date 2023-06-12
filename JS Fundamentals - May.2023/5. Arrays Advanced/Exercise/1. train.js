function train(data) {
    //split() метода превръща едни стринг на масив, като ако не дадем определен разделител, ще раздели всеки едни елемент от този стринг на отделен елемент от масива
    let wagons = data[0].split(' ').map(Number);
    let wagonCapacity = Number(data[1]);

    for (let index = 2; index < data.length; index++) {
        let command = data[index].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let passangers = Number(command[0]);

            for (let currentWagon = 0; currentWagon < wagons.length; currentWagon++) {
                if (wagonCapacity - wagons[currentWagon] >= passangers) {
                    wagons[currentWagon] += passangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])
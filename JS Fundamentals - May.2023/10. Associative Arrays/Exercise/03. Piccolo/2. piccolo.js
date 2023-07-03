function piccolo(params) {

    let parking = {};

    for (let info of params) {
        let [direction, carNumber] = info.split(', ');

        if (direction === 'IN') {
            parking[carNumber] = carNumber;
        } else if (direction === 'OUT') {
            delete parking[carNumber];
        }
    }

    let parkedCars = Object.values(parking);

    if (parkedCars.length === 0) {
        console.log('Parking Lot is Empty');
        
    } else {
        let sortedCars = parkedCars.sort((a, b) => a.localeCompare(b));

        for (let car of sortedCars) {
            console.log(car);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
])
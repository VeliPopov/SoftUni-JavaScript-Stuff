function needForSpeed(input) {

    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[car] = { mileage, fuel };
    }

    for (let line of input) {
        let [command, car, arg1, arg2] = line.split(' : ');

        switch (command) {
            case 'Drive':
                let distance = Number(arg1);
                let fuelNeeded = Number(arg2);

                if (cars[car].fuel < fuelNeeded) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    cars[car].mileage += distance;
                    cars[car].fuel -= fuelNeeded;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                    if (cars[car].mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete cars[car];
                    }
                }
                break;

            case 'Refuel':
                let fuelToAdd = Number(arg1);
                let fuelCanAdd = 75 - cars[car].fuel;

                if (fuelToAdd > fuelCanAdd) {
                    cars[car].fuel += fuelCanAdd;
                    console.log(`${car} refueled with ${fuelCanAdd} liters`);
                } else {
                    cars[car].fuel += fuelToAdd;
                    console.log(`${car} refueled with ${fuelToAdd} liters`);
                }
                break;

            case 'Revert':
                let kilometers = Number(arg1);
                cars[car].mileage -= kilometers;

                if (cars[car].mileage < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
                
            case 'Stop':
                for (let car in cars) {
                    console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
                }
                break;
        }
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
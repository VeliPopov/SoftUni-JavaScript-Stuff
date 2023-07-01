class Vehicle {
    constructor(type, model, { engine, power }, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: engine,
            power: power,
            quality: engine * power
        };
        this.fuel = fuel;
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);
let parts = { engine: 9, power: 500 };
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);
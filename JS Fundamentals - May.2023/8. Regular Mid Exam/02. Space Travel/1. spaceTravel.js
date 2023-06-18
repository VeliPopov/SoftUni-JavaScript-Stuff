function spaceTravel(params) {
    let route = params[0].split('||');
    let fuel = Number(params[1]);
    let ammunition = Number(params[2]);
    let routeLength = route.length;

    for (let index = 0; index < routeLength; index++) {
        let [command, value] = route[index].split(' ');

        if (command === "Travel") {
            if (fuel >= Number(value)) {
                fuel -= Number(value);
                console.log(`The spaceship travelled ${value} light-years.`);
            } else {
                console.log("Mission failed.");
                break;
            }
        } else if (command === "Enemy") {
            if (ammunition >= Number(value)) {
                ammunition -= Number(value);
                console.log(`An enemy with ${value} armour is defeated.`);

            } else if (fuel >= Number(value) * 2) {
                fuel -= Number(value) * 2;
                console.log(`An enemy with ${value} armour is outmaneuvered.`);

            } else {
                console.log("Mission failed.");
                break;
            }

        } else if (command === "Repair") {
            fuel += Number(value);
            ammunition += Number(value) * 2;
            console.log(`Ammunitions added: ${Number(value) * 2}.`);
            console.log(`Fuel added: ${value}.`);

        } else if (command === "Titan") {
            console.log("You have reached Titan, all passengers are safe.");
            break;
        }
    }
}
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])

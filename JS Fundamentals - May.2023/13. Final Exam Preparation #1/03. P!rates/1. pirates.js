//sorted

function pirates(input) {

    let towns = {};
    while (input[0] !== "Sail") {
        let [town, people, gold] = input.shift().split("||");
        people = Number(people);
        gold = Number(gold);

        if (towns[town] === undefined) {
            towns[town] = { population: 0, gold: 0 };
        }

        towns[town].population += people;
        towns[town].gold += gold;
    }

    input.shift(); // remove the "Sail" command from the input array

    while (input[0] !== "End") {
        let [command, town, ...args] = input.shift().split("=>");

        switch (command) {
            case "Plunder":
                let people = Number(args[0]);
                let gold = Number(args[1]);
                towns[town].population -= people;
                towns[town].gold -= gold;

                 console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (towns[town].population === 0 || towns[town].gold === 0) {
                    delete towns[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

            case "Prosper":
                let goldToAdd = Number(args[0]);
                if (goldToAdd < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    towns[town].gold += goldToAdd;
                    console.log(`${goldToAdd} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
                }
                break;
        }
    }

    let keys = Object.keys(towns);
    if (keys.length > 0) {

        console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`);
        
        keys.sort((a, b) => towns[b].gold - towns[a].gold || a.localeCompare(b)).forEach(town => {
            console.log(`${town} -> Population: ${towns[town].population} citizens, Gold: ${towns[town].gold} kg`);
        });
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}


pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
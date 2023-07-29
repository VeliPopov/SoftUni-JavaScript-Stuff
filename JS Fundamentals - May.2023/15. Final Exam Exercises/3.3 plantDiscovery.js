function plantDiscovery(input) {

    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        if (!plants[plant]) {
            plants[plant] = { rarity: Number(rarity), ratings: [] };
        } else {
            plants[plant].rarity = Number(rarity);
        }
    }

    let command = input.shift();
    while (command !== 'Exhibition') {
        let [action, plant, value] = command.split(/: | - /);
        switch (action) {
            case 'Rate':
                if (plants[plant]) {
                    plants[plant].ratings.push(Number(value));
                } else {
                    console.log("error");
                }
                break;
            case 'Update':
                if (plants[plant]) {
                    plants[plant].rarity = Number(value);
                } else {
                    console.log("error");
                }
                break;
            case 'Reset':
                if (plants[plant]) {
                    plants[plant].ratings = [];
                } else {
                    console.log("error");
                }
                break;
            default:
                console.log("error");
                break;
        }

        command = input.shift();
    }

    let sortedPlants = Object.entries(plants).sort((a, b) => b[1].rarity - a[1].rarity || average(b[1].ratings) - average(a[1].ratings));

    console.log("Plants for the exhibition:");
    for (let [plant, info] of sortedPlants) {
        console.log(`- ${plant}; Rarity: ${info.rarity}; Rating: ${average(info.ratings).toFixed(2)}`);
    }

    function average(arr) {
        if (arr.length === 0) return 0;
        return arr.reduce((a, b) => a + b) / arr.length;
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])


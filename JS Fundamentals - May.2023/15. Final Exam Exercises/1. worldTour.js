function worldTour(input) {

    let stops = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [command, arg1, arg2] = input[i].split(':');

        switch (command) {
            case 'Add Stop':
                let index = Number(arg1);
                let string = arg2;
                if (index >= 0 && index <= stops.length) {
                    stops = stops.slice(0, index) + string + stops.slice(index);
                }
                console.log(stops);
                break;

            case 'Remove Stop':
                let startIndex = Number(arg1);
                let endIndex = Number(arg2);
                if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                    stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
                }
                console.log(stops);
                break;

            case 'Switch':
                let oldString = arg1;
                let newString = arg2;
                while (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString);
                }
                console.log(stops);
                break;

            case 'Travel':
                console.log(`Ready for world tour! Planned stops: ${stops}`);
                break;
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])


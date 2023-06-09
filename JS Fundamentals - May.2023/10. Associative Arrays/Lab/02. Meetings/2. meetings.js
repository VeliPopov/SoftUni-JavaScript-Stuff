function meetings(data) {

    let schedule = {};

    for (let element of data) {
        let [day, name] = element.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }
    for (let [key, value] of Object.entries(schedule)) {
        console.log(`${key} -> ${value}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])
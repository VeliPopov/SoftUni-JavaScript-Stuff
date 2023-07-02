// решение с map

function meetings(data) {

    let schedule = new Map();

    for (let element of data) {
        let [day, name] = element.split(' ');

        if (schedule.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule.set(day, name);
            console.log(`Scheduled for ${day}`);
        }

    }

    for (let [key, value] of schedule.entries()) { // може и без .entries()
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
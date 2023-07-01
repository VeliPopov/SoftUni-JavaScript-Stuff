function meetings(params) {
    
    let schedule = {};

    for (let info of params) {
        let [day, name] = info.split(' ');

        if (!schedule[day]) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
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

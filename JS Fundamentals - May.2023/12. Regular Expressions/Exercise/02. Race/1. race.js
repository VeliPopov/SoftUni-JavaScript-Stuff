function race(input) {

    let participants = input.shift().split(', ');
    let racers = {};

    for (let line of input) {
        if (line === 'end of race') {
            break;
        }
        let nameMatch = line.match(/[A-Za-z]/g);
        let distanceMatch = line.match(/\d/g);
        if (nameMatch && distanceMatch) {
            let name = nameMatch.join('');
            let distance = distanceMatch.map(Number).reduce((a, b) => a + b, 0);
            if (participants.includes(name)) {
                if (!racers[name]) {
                    racers[name] = 0;
                }
                racers[name] += distance;
            }
        }
    }

    let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);

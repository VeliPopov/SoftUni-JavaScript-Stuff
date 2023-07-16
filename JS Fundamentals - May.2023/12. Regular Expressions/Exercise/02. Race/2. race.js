function race(input) {

    let participants = input.shift().split(', ');
    let racers = {};

    for (let list of participants) {
        racers[list] = 0;
    }

    let commandLine = input.shift();
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /[0-9]/g;

    while (commandLine !== 'end of race') {

        let currentName = commandLine.match(namePattern).join('');
        let distance = commandLine.match(distancePattern);

        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));


        if (racers.hasOwnProperty(currentName)) {
            racers[currentName] += currentDistance;

        }

        commandLine = input.shift();
    }

    let sortedParticipants = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedParticipants[0][0]}`);
    console.log(`2nd place: ${sortedParticipants[1][0]}`);
    console.log(`3rd place: ${sortedParticipants[2][0]}`);
    // първата [0] отговаря за целия масив, а втората за елемента на 0-вия индекс в масива



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
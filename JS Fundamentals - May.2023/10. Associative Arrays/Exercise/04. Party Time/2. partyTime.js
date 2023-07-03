// no object

function partyTime(list) {

    let vipList = [];
    let regularList = [];

    let command = list.shift();

    while (command !== 'PARTY') {

        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regularList.push(command);
        } else {
            vipList.push(command);
        }
        command = list.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of list) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));

}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])
// with object

function partyTime(list) {

    let guestList = {
        vip: [],
        regular: []
    };

    let partyIndex = list.indexOf('PARTY');
    let invitedGuests = list.slice(0, partyIndex);
    let guestsAtParty = list.slice(partyIndex + 1);

    for (let guest of invitedGuests) {

        if (isNaN(Number(guest[0]))) {
            guestList.regular.push(guest);

        } else {
            guestList.vip.push(guest);
        }
    }

    for (let guest of guestsAtParty) {

        if (guestList.vip.includes(guest)) {
            let index = guestList.vip.indexOf(guest);
            guestList.vip.splice(index, 1);

        } else if (guestList.regular.includes(guest)) {
            let index = guestList.regular.indexOf(guest);
            guestList.regular.splice(index, 1);
        }
    }

    console.log(guestList.vip.length + guestList.regular.length);
    console.log(guestList.vip.join('\n'));
    console.log(guestList.regular.join('\n'));
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

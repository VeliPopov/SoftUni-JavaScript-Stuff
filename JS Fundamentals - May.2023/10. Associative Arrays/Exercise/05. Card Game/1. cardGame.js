function cardGame(input) {
    let powers = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    let types = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let players = {};

    input.forEach(line => {
        let [name, hand] = line.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }

        hand.forEach(card => {
            players[name].add(card);
        });
    });

    for (let name in players) {

        let totalValue = 0;
        
        [...players[name]].forEach(card => {
            let type = card[card.length - 1];
            let power = card.slice(0, card.length - 1);
            power = isNaN(power) ? powers[power] : Number(power);
            totalValue += power * types[type];
        });
        console.log(`${name}: ${totalValue}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD']);

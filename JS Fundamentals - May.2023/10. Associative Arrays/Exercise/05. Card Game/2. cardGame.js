function cardGame(players) {
    let powers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
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

    let playersCards = {};

    for (let info of players) {
        let tokens = info.split(': ');
        let name = tokens[0];
        let cardsArray = tokens[1].split(', ');

        if (!playersCards[name]) {
            playersCards[name] = new Set();
        }

        for (let card of cardsArray) {
            playersCards[name].add(card);
        }
    }

    for (let [name, cards] of Object.entries(playersCards)) {
        let totalValue = 0;
        for (let card of cards) {
            let cardTokens = card.split('');
            let type = cardTokens.pop();
            let power = cardTokens.join('');
            totalValue += powers[power] * types[type];
        }
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
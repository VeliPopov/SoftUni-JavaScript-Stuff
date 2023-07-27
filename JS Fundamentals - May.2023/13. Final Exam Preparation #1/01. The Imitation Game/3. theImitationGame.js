function theImitationGame(input) {

    let message = input.shift();

    let parserObj = {
        'Move': (message, n) => {
            n = Number(n);
            for (let i = 0; i < n; i++) {
                let movedLetters = message.substring(0, 1);
                let restOfText = message.substring(1);
                message = restOfText + movedLetters;
            }
            return message;
        },
        'Insert': (message, index, value) => {
            index = Number(index);
            message = message.substring(0, index) + value + message.substring(index);
            return message;
        },
        'ChangeAll': (message, substr, repl) => {
            while (message.includes(substr)) {
                message = message.replace(substr, repl);
            }
            return message;
        }
    }

    for (let line of input) {
        if (line === 'Decode') {
            break;
        }

        let token = line.split('|');
        let command = token[0];
        message = parserObj[command](message, token[1], token[2]);

    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode'
    ]
);
theImitationGame(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode'
    ]

);
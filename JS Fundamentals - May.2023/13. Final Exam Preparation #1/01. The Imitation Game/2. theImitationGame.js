function theImitationGame(input) {

    let message = input.shift();

    for (let line of input) {
        if (line === 'Decode') {
            break;
        }

        let token = line.split('|');
        let command = token[0];

        switch (command) {
            case 'Move':
                let n = Number(token[1]);

                for (let i = 0; i < n; i++) {
                    let movedLetters = message.substring(0, 1);
                    let restOfText = message.substring(1);
                    message = restOfText + movedLetters;
                }
                break;

            case 'Insert':
                let index = Number(token[1]);
                let value = token[2];

                message = message.substring(0, index) + value + message.substring(index);
                break;

            case 'ChangeAll':
                let substr = token[1];
                let repl = token[2];

                while (message.includes(substr)) {
                    message = message.replace(substr, repl);
                }

                break;
        }

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
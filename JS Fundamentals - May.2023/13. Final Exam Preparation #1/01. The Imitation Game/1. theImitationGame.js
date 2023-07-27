function theImitationGame(input) {

    let message = input[0];
    
    for (let index = 1; index < input.length; index++) {
        if (input[index] === 'Decode') {
            break;
        }

        let [command, arg1, arg2] = input[index].split('|');
        arg1 = Number(arg1) || arg1;  // Convert arg1 to a number if possible.

        switch (command) {
            case 'Move':
                let movedLetters = message.substring(0, arg1);
                message = message.substring(arg1) + movedLetters;
                break;
            case 'Insert':
                message = message.substring(0, arg1) + arg2 + message.substring(arg1);
                break;
            case 'ChangeAll':
                while (message.includes(arg1)) {
                    message = message.replace(arg1, arg2);
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

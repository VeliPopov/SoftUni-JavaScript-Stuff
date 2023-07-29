function secretChat(params) {

    let message = params[0];
    let commands = params.slice(1);

    commands.forEach(command => {
        let [action, arg1, arg2] = command.split(':|:');

        if (action === 'InsertSpace') {
            let index = Number(arg1);
            message = message.slice(0, index) + ' ' + message.slice(index);

            console.log(message);

        } else if (action === 'Reverse') {
            if (message.includes(arg1)) {
                message = message.replace(arg1, '') + arg1.split('').reverse().join('');

                console.log(message);

            } else {
                console.log("error");
            }

        } else if (action === 'ChangeAll') {
            let regex = new RegExp(arg1, 'g');
            message = message.replace(regex, arg2);
            
            console.log(message);
        }
    });

    console.log("You have a new text message: " + message);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])

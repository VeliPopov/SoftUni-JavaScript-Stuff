function passwordReset(input) {

    let password = input.shift();

    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(firstArg);
                let length = Number(secondArg);
                let cutSubstring = password.substring(index, index + length);
                password = password.replace(cutSubstring, '');
                console.log(password);
                break;
            case 'Substitute':
                let substituteSubstring = firstArg;
                let substitute = secondArg;
                
                if (password.includes(substituteSubstring)) {
                
                    while (password.includes(substituteSubstring)) {
                        password = password.replace(substituteSubstring, substitute);
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
            case 'Done':
                console.log(`Your password is: ${password}`);
                break;
        }
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
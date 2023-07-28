function passwordReset(input) {

    let password = input.shift(); //"Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr"

    let commandParser = {
        'TakeOdd': (password) => {
            // 'asd'
            // 'a', 's', 'd'
            // ['a', 's', 'd']
            // ... спред оператор - разбива съставните части на един стринг в едни масив (все едно сплитваме по празно), 
            // а в допълнение с [] му казваче, че искаме да върне масив от тези съставни елементи
            return [...password]
                .filter((symbol, index) => {
                    return index % 2 !== 0
                })
                .join('');
        },
        'Cut': (password, index, length) => {

            index = Number(index);
            length = Number(length);

            let substring = password.substr(index, length);
            return password.replace(substring, '');

        },
        'Substitute': (password, substring, substitute) => {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute)
            }
            console.log("Nothing to replace!");
            return password;
        }
    };

    input.forEach(line => {
        if (line !== 'Done') {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password, ...tokens);

            if (oldPassword !== password) {
                console.log(password);
            }
        }
    });
    console.log(`Your password is: ${password}`);
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
function arrayModifier(params) {
    let array = params[0].split(' ').map(Number);
    let commands = params.slice(1);

    for(let command of commands) {
        let [action, element1, element2] = command.split(' ');
        // destructuring

        element1 = Number(element1);
        element2 = Number(element2);

        switch(action) {
            case 'swap':
                [array[element1], array[element2]] = [array[element2], array[element1]];
                // destructuring assignment
                break;
            case 'multiply':
                array[element1] *= array[element2];
                break;
            case 'decrease':
                array = array.map(x => x - 1);
                break;
            case 'end':
                console.log(array.join(', '));
                return;
        }
    }
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])
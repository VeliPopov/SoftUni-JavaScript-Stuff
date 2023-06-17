function arrayModifier(params) {

    let arrayOfNumbers = params.shift().split(' ').map(Number);
    let paramsLength = params.length;

    for (let index = 0; index < paramsLength; index++) {
        let currentCommand = params[index].split(' ');
        let command = currentCommand.shift();
        let index1 = currentCommand.shift();
        let index2 = currentCommand.shift();
        // let [command,  index1, index2] = array[index].split(' ');

        switch (command) {
            case 'swap':
                let temp = arrayOfNumbers[index1];
                arrayOfNumbers[index1] = arrayOfNumbers[index2];
                arrayOfNumbers[index2] = temp;
                break;
            case 'multiply':
                let result = arrayOfNumbers[index1] * arrayOfNumbers[index2];
                arrayOfNumbers[index1] = result;
                break;
            case 'decrease':
                arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
                break;
            case 'end':
                break;
        }
        // if (command === 'end') {
        //     break;
        // }
    }
    console.log(arrayOfNumbers.join(', '));
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
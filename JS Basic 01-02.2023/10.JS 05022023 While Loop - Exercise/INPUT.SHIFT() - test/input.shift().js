function solve(input) {
    //let index = 0;
    let command = input.shift(); //не само взима интупа от индекса (елемента от масива), а го премества (изважда го) и го запазва в съответната променлива
    //let command = input[index];
    //index++;

    while (command !== 'End') {
        console.log(`Hi, I am ${command}`);

        command = input.shift();
        //command = input[index];
        //index++;

        console.log(input);
    }
}
solve([
    'Jane',
    'Mark',
    'Tim',
    'Toni',
    'End'
]);
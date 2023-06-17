function movingTarget(params) {

    let stringTarget = params.shift().split(' ');
    let target = stringTarget.map(x => Number(x));

    let index = 0;
    let command = params[index];
    index++;

    while (command !== "End") {
        let tokens = command.split(' ');
        let elementIndex = Number(tokens[1]);

        switch (tokens[0]) {
            case 'Shoot':
                if (isValidRange(elementIndex, target)) {
                    let power = Number(tokens[2]);
                    target[elementIndex] -= power;
                    if (target[elementIndex] <= 0) {
                        arrayManipulator(target, elementIndex, 1)
                    }
                }
                break;

            case 'Add':
                let value = Number(tokens[2]);
                if (isValidRange(elementIndex, target)) {
                    arrayManipulator(target, elementIndex, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                let radius = Number(tokens[2]);
                if (elementIndex - radius >= 0 && elementIndex + radius < target.length) {
                    arrayManipulator(target, elementIndex - radius, radius * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;

        }
        command = params[index];
        index++;
    }
    console.log(target.join('|'));


    function isValidRange(index, array) {
        if (index >= 0 && index < array.length) {
            return true;
        }
        return false;
        
    }   
    function arrayManipulator(array, startIndex, endIndex, value) {
        if (value) {
            array.splice(startIndex, endIndex, value);
        }
        return array.splice(startIndex, endIndex);
        
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
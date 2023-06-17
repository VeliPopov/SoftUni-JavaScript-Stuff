function movingTarget(params) {
    let target = params[0].split(' ').map(Number);

    for (let i = 1; i < params.length; i++) {
        let [command, index, value] = params[i].split(' ');
        index = Number(index);
        value = Number(value);

        switch (command) {
            case 'Shoot':
                if (index >= 0 && index < target.length) {
                    target[index] -= value;
                    if (target[index] <= 0) {
                        target.splice(index, 1);
                    }
                }
                break;

            case 'Add':
                if (index >= 0 && index < target.length) {
                    target.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                if (index - value >= 0 && index + value < target.length) {
                    target.splice(index - value, value * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
                
            case 'End':
                console.log(target.join('|'));
                return;
        }
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
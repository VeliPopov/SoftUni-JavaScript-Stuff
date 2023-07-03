function aMinerTask(params) {

    let resources = {};

    for (let index = 0; index < params.length; index += 2) {
        let resource = params[index];
        let quantity = Number(params[index + 1]);

        if (resources[resource]) {
            resources[resource] += quantity;
        }else {
            resources[resource] = quantity;
        }        
    }

    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
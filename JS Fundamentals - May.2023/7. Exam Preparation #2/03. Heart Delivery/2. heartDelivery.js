function heartDelivery(params) {
    let neighborhood = params.shift().split('@').map(Number);
    let jump = params.shift();
    let cupidPosition = 0;

    while (jump !== "Love!") {
        let output = jump.split(' ');
        cupidPosition += Number(output[1]);

        if (cupidPosition > neighborhood.length - 1) {
            cupidPosition = 0;
        }
        if (neighborhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        } else {
            neighborhood[cupidPosition] -= 2;
            if (neighborhood[cupidPosition] === 0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        }
        jump = params.shift();
    }
    console.log(`Cupid's last position was ${cupidPosition}.`);

    let counter = 0;
    let heartsForVFlag = true;

    neighborhood.forEach(element => {
        if (element !== 0) {
            heartsForVFlag = false;
            counter++;
        }
    });

    if(heartsForVFlag) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${counter} places.`);
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
heartDelivery(["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"])
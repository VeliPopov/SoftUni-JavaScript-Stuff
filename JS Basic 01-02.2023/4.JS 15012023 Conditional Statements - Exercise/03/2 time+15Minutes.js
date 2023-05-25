function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes;

    let finalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = (totalMinutes % 60) + 15;

    if (finalMinutes >= 60) {
        finalHours += 1;
        finalMinutes -= 60;
    }

    if (finalHours >= 24) {
        finalHours = 0;
    }
    console.log(`${finalHours}:${finalMinutes < 10 ? "0" : ""}${finalMinutes}`);
}

timePlus15Minutes(["12", "49"]); 

// ${finalHours < 10 ? "0" : ""}  - ако го вкарам и това в конзолата, ще ми изписва 0 и пред часа, ако е по-малко от 10 часа (единично число).
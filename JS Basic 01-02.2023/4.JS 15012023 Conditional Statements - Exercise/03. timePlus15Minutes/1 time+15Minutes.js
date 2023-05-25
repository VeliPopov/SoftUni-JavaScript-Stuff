// FIXME: До половината е вярно, но останалото е грешно. Макар да излизат сметките с подадените стойности от задачата, останалите проверки гърмят.

function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes;

    let finalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = (totalMinutes % 60) + 15;

    if (finalMinutes >= 60) {
        finalHours += 1;
        finalMinutes -= 60;
        


        if (finalHours >= 24) {
            finalHours = 0;
            // до тук е ок
        }
    }
}
timePlus15Minutes(["23", "59"]);


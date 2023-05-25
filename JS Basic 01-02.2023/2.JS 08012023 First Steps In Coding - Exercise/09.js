// 1.	Дължина в см – цяло число в интервала [10 … 500]
// 2.	Широчина в см – цяло число в интервала [10 … 300]
// 3.	Височина в см – цяло число в интервала [10… 200]
// 4.	Процент  – реално число в интервала [0.000 … 100.000]

// Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. 


function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentFilled = Number(input[3]) / 100;

    let volume = length * width * height;
    let volumeInLiters = volume / 1000;
    

    // let volumeTaken = percentFilled * volume;
    // let residualVolume = volumeInLiters - volumeTaken;
    // Умножавам %-та на запълнения обем по общия обем, за да намеря запълнения към мометна обем.
    // (?/100)*? - за да обърна заетите %-ти в реални заети литри!
    // След това вадя от пълния обем заетия обем.

    let residualVolume = volumeInLiters * (1-percentFilled);
    console.log(residualVolume);

}
fishTank(["85", "75", "47", "17"]);


// ОТКЪДЕ ИДВА ШИБАНАТА ЕДИНИЦА????  
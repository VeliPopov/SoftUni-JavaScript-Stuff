function worldSwimmingRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecForOneMeter = Number(input[2]);
    
    let idealTime = timeInSecForOneMeter * distanceInMeters;
    let timesDelayd = Math.floor(distanceInMeters / 15);        // тук изчислявам колко пъти се е забавил
    let delay = timesDelayd * 12.5;                             // а тук изчислявам общото забавяне в секунди
    
    let finalTime = idealTime + delay;

    if (finalTime < recordInSec) {
        let ivansTime = finalTime ;
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`);
    }else {
        let missingTime = finalTime - recordInSec;
        console.log(`No, he failed! He was ${missingTime.toFixed(2)} seconds slower.`);
    }

}
//worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]); 




// съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди


// •	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
// •	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o	"No, he failed! He was {недостигащите секунди} seconds slower."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.


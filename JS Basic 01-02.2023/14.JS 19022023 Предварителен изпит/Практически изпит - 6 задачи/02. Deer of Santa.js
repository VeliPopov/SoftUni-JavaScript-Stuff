function deerOfSanta(input) {
    let days = Number(input[0]);
    let killosOfFood = Number(input[1]);
    let foodPerDayForDeerOne = Number(input[2]);
    let foodPerDayForDeerTwo = Number(input[3]);
    let foodPerDayForDeerThree = Number(input[4]);

    let foodForDeerOne = foodPerDayForDeerOne * days;
    let foodForDeerTwo = foodPerDayForDeerTwo * days;
    let foodForDeerThree = foodPerDayForDeerThree * days;

    let totalfoodNeeded = foodForDeerOne + foodForDeerTwo + foodForDeerThree;

    if (killosOfFood >= totalfoodNeeded) {
        let foodLeft = killosOfFood - totalfoodNeeded;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let neededFood = totalfoodNeeded - killosOfFood;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

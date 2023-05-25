// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка


// •	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]


function basketballEquipment(input) {
    let annualFee = Number(input[0]);

    
    let sneakers = annualFee * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit * 0.25;
    let accessories = ball * 0.2;


    // Умножавам годишната такса по разликата и след това изваждам получения резултат от таксата, за да намеря реалната цена.
    // let sneakersPrceDiff = 0.4 * annualFee;
    // Let sneakersPrice = annualFee - sneakerPriceDiff;
    // let outfitPriceDiff = 0.2 * sneakersPrice;
    // let outfitPrice = sneakersPrice - outFitPriceDiff;

    // Let ballPrice = (1 / 4) * outfitPrice;   
    // Може да се вкара директно като дроб - със или без скобите.
    // Let accessoriesPrice = (1 / 5) * ballPrice;
   
    let totalCosts = sneakers + outfit + ball + accessories + annualFee;
    console.log(totalCosts);

}

basketballEquipment(["365"]);
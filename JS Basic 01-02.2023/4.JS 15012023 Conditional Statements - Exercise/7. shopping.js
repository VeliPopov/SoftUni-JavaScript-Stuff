function shoping(input) {
   let petarsBudget = Number(input[0]);
   let videoCards = Number(input[1]);
   let processors = Number(input[2]);
   let memoryBlocks = Number(input[3]);
        
    let videoCardsPrice = videoCards * 250;
    let processorsPrice = (0.35 * videoCardsPrice) * processors;
    let memoryBlocksPrice = (0.10 * videoCardsPrice) * memoryBlocks;

    let finalPrice = videoCardsPrice + processorsPrice + memoryBlocksPrice;

    if (videoCards > processors) {
        finalPrice = 0.85 * finalPrice;
    }

    if (petarsBudget >= finalPrice) {        //ГРЕШКАТА беше, в това че освен, че е възможно да стане ако парите са му повече, то може да стане и ако са = цената на купката
        let summLeft = petarsBudget - finalPrice;
        console.log(`You have ${summLeft.toFixed(2)} leva left!`);
    }else {
        let summNeeded = finalPrice - petarsBudget;
        console.log(`Not enough money! You need ${summNeeded.toFixed(2)} leva more!`);
    }

}
shoping(["900", "2", "1", "3"]);
//shoping(["920.45", "3", "1", "1"]);

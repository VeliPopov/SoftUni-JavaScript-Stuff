function yardGreening(input) {

    let theWholeYard = Number(input[0]);
    let oneSquareMeterPrice = 7.61;

    let totalYardGreening = theWholeYard * oneSquareMeterPrice;
    
    let priceDiscount = totalYardGreening * 0.18;
    
    let endPrice = totalYardGreening - priceDiscount;
    
    console.log(`The final price is: ${endPrice} lv.`)
    console.log(`The discount is: ${priceDiscount} lv.`);

}

yardGreening(["550"]);
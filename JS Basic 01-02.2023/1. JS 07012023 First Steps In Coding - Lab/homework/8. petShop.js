function petShop(input) {
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;

    let dogFood = dogFoodPacks * dogFoodPrice;
    let catFood = catFoodPacks * catFoodPrice;
    
    let petsFoodBill = dogFood + catFood;
    console.log(petsFoodBill + " lv");

}

petShop(["13", "9"]);
// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 


// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]

// Цената на доставка е 2.50 лв и се начислява най-накрая.  


function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veganMenuPrice = 8.15;

    let chicken = chickenMenus * chickenMenuPrice;
    let fish = fishMenus * fishMenuPrice;
    let vegan = veganMenus * veganMenuPrice;

    let orderCost = chicken + fish + vegan;
    let dessert = orderCost * 0.2;
     
    let deliveryCost = 2.50;

    let finalCost = orderCost + dessert + deliveryCost;
    console.log(finalCost);
}
foodDelivery(["9", "2", "6"]);


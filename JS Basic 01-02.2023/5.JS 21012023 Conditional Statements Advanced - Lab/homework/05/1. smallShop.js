function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;
    //FIXME: външната конструкция ще е по градът, тъй като е по-кратка (3 елемента), докато вътрештата е с 5
    //TODO: при писане на толкова дълъг код (задача), е хубаво да се тества на етапи, за да може ако има грешка да се хване навреме.
    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.50;
                    break;
                case "water": 
                    sum = quantity * 0.80;
                    break;
                case "beer":
                    sum = quantity * 1.20;
                    break;
                case "sweets":
                    sum = quantity * 1.45;
                    break;
                case "peanuts":
                    sum = quantity * 1.60;
                    break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.40;
                    break;
                case "water": 
                    sum = quantity * 0.70;
                    break;
                case "beer":
                    sum = quantity * 1.15;
                    break;
                case "sweets":
                    sum = quantity * 1.30;
                    break;
                case "peanuts":
                    sum = quantity * 1.5;
                    break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee":
                    sum = quantity * 0.45;
                    break;
                case "water": 
                    sum = quantity * 0.70;
                    break;
                case "beer":
                    sum = quantity * 1.10;
                    break;
                case "sweets":
                    sum = quantity * 1.35;
                    break;
                case "peanuts":
                    sum = quantity * 1.55;
                    break;
            }
            break;
    }
console.log(sum);
  

}
//smallShop(["coffee", "Varna", "2"]);
//smallShop(["peanuts", "Plovdiv", "1"]);
//smallShop(["beer", "Sofia", "2"]);
//smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);
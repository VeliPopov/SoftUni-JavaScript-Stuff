//FIXME: решение с възможна неисвестна в него - дава грешка
// нарича се boolean flag - boolean променлива с начална стойност, като в края проверяваме дали тази начална стойно е същата или не. 
// в кода си маркираме там къде трябва да вдигнем FLAG - там където можем да имаме грешка

function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;
    let hasError = false;
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
                default: hasError = true;
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
                default: hasError = true;
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
                default: hasError = true;
            }
            break;
        default: hasError = true;
    }
    if  (!hasError) {
          console.log(sum);
    } else {
        console.log("Error");
    }

    // if (sum === 0) {
    //     console.log("Error");
    // } else {
    //     console.log(sum);
    // }
    // това е другия начин, но bollean flag-а е използвания начин в практиката

}
//smallShop(["coffee", "Varna", "2"]);
//smallShop(["peanuts", "Plovdiv", "1"]);
//smallShop(["beer", "Sofia", "2"]);
//smallShop(["water", "Plovdiv", "2"]);
smallShop(["Cola", "Sofia", "2.23"]);
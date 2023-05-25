function fruitOrVegetable(input) {
    let product = input[0];

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        //default: console.log("unknown"); break;   - FIXME:това тук изобщо не е нужно да го има
    //} switch (product) {                          - FIXME:само едни switch е напълно достътъчен в този случай
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}
fruitOrVegetable(["cherry"]);
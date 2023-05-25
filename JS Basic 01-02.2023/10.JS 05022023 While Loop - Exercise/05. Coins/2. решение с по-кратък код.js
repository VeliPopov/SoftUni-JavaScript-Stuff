function coins(input) {
    let sum = Number(input[0]);
    let stinki = Math.round(sum * 100); //обръщам всичко в стотинки, тъй като е по-лесно да се работи само с една (мерна) единица
    // закръглям резултата, тъй като понякога в js изливат странни резултати от сметките
    let change = 0;

    while (stinki > 0) { //докато стотинки е по-голямо от 0 - прави следните проверки
        if (stinki >= 200) {
            stinki -= 200;
        } else if (stinki >= 100) {
            stinki -= 100;
        } else if (stinki >= 50) {
            stinki -= 50;
        } else if (stinki >= 20) {
            stinki -= 20;
        } else if (stinki >= 10) {
            stinki -= 10;
        } else if (stinki >= 5) {
            stinki -= 5;
        } else if (stinki >= 2) {
            stinki -= 2;
        } else if (stinki >= 1) {
            stinki -= 1;
        }
        change++; //изнасям брояча извън проверките, но в цикъла (така се съкръщават доста редове код)

    }

    console.log(change);

}
coins(["2.73"]);
function characterSequence(input) {
    let text = input[0];

    for (let i = 0; i < text.length; i++) { //ако променя 0-та на 1 в променливата, ще ми отпечата всички елемнети без първия
        console.log(text[i]); //0, 1, 2, 3, 4 - това са индексите, за които приемем стойнос, и като стигне 5 дава false и приключва цикъла
    }
}
characterSequence(["ice cream"]);



function characterSequence(input) {
    let text = input[0];

    for (let i = 0; i < text.length; i++) { 
        // (let i = 0; i <= text.length - 1; i++) ако искам да е с <=
        // ако започвам от 0 (в променливата), най-вероятно НЕ ТРЯБВА да има =
        // ако започвам с 1 - най-вероятно ТРЯБВА да има =
        console.log(text[i]);
    }
}
characterSequence(["ice cream"]);



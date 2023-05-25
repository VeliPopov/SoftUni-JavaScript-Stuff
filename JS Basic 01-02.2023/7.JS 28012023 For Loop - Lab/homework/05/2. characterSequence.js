function characterSequence(input) {
    let text = input[0];

    for (let i = text.length - 1; i >= 0; i--) {    //завърташ цикъла за да ти даде изхода в обратен ред
        console.log(text[i]); 
    }
}
characterSequence(["ice cream"]);
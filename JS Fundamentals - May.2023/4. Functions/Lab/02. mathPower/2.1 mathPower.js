function myMath(num, power) {

    let output = 1;
    for (let i = 0; i < power; i++) {
        output *= num;
    }
    console.log(output);

}
myMath(2, 8)
myMath(3, 4)
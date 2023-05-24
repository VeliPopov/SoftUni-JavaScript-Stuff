function test() {
    let a = 25;
    let i = a / 4;      	           // 6.25 (дробно деление)
    let f = parseInt(a / 4.0);         // 6 (дробната част се отрязва)
    let infinity = a / 0;              // Infinity (безкрайност)
    let sqrt = Math.sqrt(-1);          // получава се NaN
    console.log(f);

}
test();

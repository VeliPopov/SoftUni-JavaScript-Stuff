function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entryTax = Number(input[1]); //feePerPerson
    let sunbeadTax = Number(input[2]);
    let umbrellaTax = Number(input[3]);


    let entryPrice = peopleCount * entryTax;

    let sunbeads = Math.ceil(0.75 * peopleCount);
    let sunbeadPrice = sunbeads * sunbeadTax;

    let umbrellas = Math.ceil(peopleCount / 2);
    let umbrellasPrice = umbrellas * umbrellaTax;

    let totalPrice = entryPrice + sunbeadPrice + umbrellasPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);


}
poolDay(["100",
"8",
"6",
"4"]);
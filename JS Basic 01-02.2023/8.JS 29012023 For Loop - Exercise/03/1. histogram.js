//! На първия ред от входа стои цялото число n (1 ≤ n ≤ 1000) – n е по-голямо или равно на 1 и по-малко или равно на 1000


function histogram(input) {
    let n = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i])  //променливата е нужна за да мога да взема новото число от масива
        
        if (currentNumber < 200) {
            p1Count++;
        } else if (currentNumber <= 399) {
            p2Count++;
        } else if (currentNumber <= 599) {
            p3Count++;
        } else if (currentNumber <= 799) {
            p4Count++;
        } else {
            p5Count++;
        }}

        let p1Percent = (p1Count / n) * 100;  //взимам броя на текущата група числа и ги деля на общия брой числа, след което ги умножавам по 100 за да ги превърна в %
        let p2Percent = (p2Count / n) * 100;
        let p3Percent = (p3Count / n) * 100;
        let p4Percent = (p4Count / n) * 100;
        let p5Percent = (p5Count / n) * 100;

        console.log(`${p1Percent.toFixed(2)}%`);
        console.log(`${p2Percent.toFixed(2)}%`);
        console.log(`${p3Percent.toFixed(2)}%`);
        console.log(`${p4Percent.toFixed(2)}%`);
        console.log(`${p5Percent.toFixed(2)}%`);
      
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"]);

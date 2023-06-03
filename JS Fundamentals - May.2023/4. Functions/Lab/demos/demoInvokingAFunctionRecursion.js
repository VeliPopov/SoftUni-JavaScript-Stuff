function countDown(x) {
    console.log(x);
    if (x > 0) { countDown(x - 1); }
}        //дъно          //аргумент
countDown(10)

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
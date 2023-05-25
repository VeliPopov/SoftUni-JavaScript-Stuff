function solve(){
    let a = 5;
    while (true) { //не е bestpractice и не се използва, по-добре да не се пише никога
      if (a > 10) {
        break;
      }
      console.log("a = " + a);
      a++;
    }
}
solve()

// function solve(){
//     let myNum = 1; //променливата се дефинира извън цикъла
//     while (myNum <= 10) { //уславието на цикъла
//       console.log(myNum);
//       myNum++;//новата стойност
//     }
// }
// solve()
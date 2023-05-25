function solve() {
    let i = 0;
    while (i < 4) {
      switch(i) {
        case 1: console.log(i);
        case 2: console.log(i);
        break;
        case 3: console.log(i);
        break; 
      }
      i++;
    }
       //дава 1123 защото на първата проверка ще мачне на двата първи лога по една 1-ца, защото няма break
       //а след това ще си вкара двете проверки на 2 и 3
  }
  solve();
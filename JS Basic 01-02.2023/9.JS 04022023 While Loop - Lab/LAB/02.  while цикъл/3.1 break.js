function solve() {
    let index = 0;
    while (true) {
        let str = input[index]; //получаваме го вътре (можем да го създадем)
        index++;
        if (str === "Stop") {
            break;
        }

        console.log("Infinite loop");
    }
 
}
solve()

//това тук е bestpractice - прилага се по-често в практиката
// не се налага да прови проверка вътре в цикъла, която да определи кога да спре
function solve() {
    let index = 0;
    let str = input[index]; //получаваме стринга преди уславието на цикъла, за да можем да го използваме в уславието на цикъла
    while (str !== "Stop") {
        console.log("Infinite loop");
        index++;
        str = input[index];
    }

}
solve()
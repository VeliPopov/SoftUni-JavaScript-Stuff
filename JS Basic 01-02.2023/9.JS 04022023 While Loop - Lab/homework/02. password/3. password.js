//FIXME: работещо решение, но не е препоръчително да се ползва този метод

function password(input){
    let index = 0; 

    let name = input[index];
    index++; 

    let pass = input[index];
    index++;

    while (true) {
        let tempPass = input[index]; //* разликата е, в това че променливата е във блока на цикъла и има добавена проверка
        index++;                    
        if (pass === tempPass) {     //! проблема идва, от това че е възможно да се сбърка мястото на проверката (при по-сложен код), затова се предпочита другото решение
            break;
        }
    }
    console.log(`Welcome ${name}!`);

}
password([
"Nakov",
"1234",
"Pass",
"1324",
"1234"]);
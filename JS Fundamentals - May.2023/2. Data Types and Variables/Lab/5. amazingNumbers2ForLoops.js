function amazingNumbers(num) {
    //за да намеря сумата от числата, трбява да го превърна в текст, тъй като числата сами по себе си нямат индекс - //*ред 11
    //ако е объранто на текст, може спокойно да се достъпват отделните индекси на числото (чифрата на всяка позиция)
    //стринга се обхожда по дължина и сумата от всеки едни негов елемент (i) се обръща към число (Number) и се сумира в променливата //*редове 13 и 14
    //когато първия for цикъл приключи работа, ще имам сумата на съставните цифри на подаденото число
    //тук вече обръщам получената сума към стринг //*ред 17
    //и инициализирам променлива, чиято първоначална стойност е False (предполагам, че е с главна буква заради търсения резултат - стринг, а не е булева променлива)//*ред 19
    //втория цикъл обхожда стринговата репрезентация на сумата получена от първия цикъл, проверката в него проверява индекс по индекс
    //обръща ги към число, и проверява всеки индекс дали е === 9 (съвпада с 9) //*ред 23
    //ако намери съвпадение, променливата отива на True и брейква цикъла; в противен слечай, цикъла завършва и остава False

    let numAsText = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        sum += Number(numAsText[i]);
    }

    let sumAsString = sum.toString();
    let isAmazing = 'False';

    for (let i = 0; i < sumAsString.length; i++) {
        if (Number(sumAsString[i]) === 9) {
            isAmazing = 'True';
            break;
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`);
}
amazingNumbers(999)
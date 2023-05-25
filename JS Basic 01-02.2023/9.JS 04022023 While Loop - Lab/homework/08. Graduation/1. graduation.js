function graduation(input) {

    let index = 0;
    let student = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let level = 1; //променливата която брои класовете; започва от 1 тъй като това е първия
    let sumGrade = 0; //сумата от оценките му
    let badGradeCounter = 0; //първоначалната стойност е 0, тъй като не знам колко ще бъдат лошите оценки
    let expelledFromSchool = false; //булев флаг - все още не е изключен тук

    while (level <= 12) {
        if (grade < 4.00) { //< е защото искам да преброя лошите годишни оценки
            badGradeCounter++;
            if (badGradeCounter === 2) {
                expelledFromSchool = true; //маркирано събитие с булев флаг - потвърждава изключването на ученика
                break; //програмата приключва и ученика е изключен
            }
            grade = Number(input[index]); //ако е само една слаба оценка - повтаря годината
            index++; //натрупването
            continue; //остава в същия клас, а не продължава нагоре - връща го да повтаря
        }
        level++; //преминава в слеващия клас
        sumGrade += grade;
        grade = Number(input[index]); //новата оценка
        index++; //натрупването
    }
    if (expelledFromSchool) {
        console.log(`${student} has been excluded at ${level} grade`);
    } else {
        console.log(`${student} graduated. Average grade: ${(sumGrade / 12).toFixed(2)}`);
    }

}
graduation([
    "Mimi",
    "5",
    "6",
    "5",
    "6",
    "5", 
    "6",
    "6",
    "2",
    "3"]);
function maxNumber(input) {

    let index = 0;
    let newInput = input[index];
    index++;

    let myMaxNumber = Number.MIN_SAFE_INTEGER;   //търсейки най-голямото число, започвам от възможно най-малкото
                                                 // обратното важи за търсене на най-малкото число - започвам с първоначална стойност от най-голямото
    while (newInput !== "Stop") {
        let number = Number(newInput);
       
        if (myMaxNumber < number) {   //ако новата стойност на най-голямото ми число, е по-малко от текущото число, то тогава текущото число е най-голямото число измежду всички числа, които съм намерил
            myMaxNumber = number;     //заменям стойността на моето, с най-голямото
        }

        newInput = input[index];
        index++;
    }
    console.log(myMaxNumber);   //извеждам най-голямото число - с най-голямата запазена стойност след проверката

}
maxNumber([
    "100",
    "99",
    "80",
    "70",
    "Stop"]);
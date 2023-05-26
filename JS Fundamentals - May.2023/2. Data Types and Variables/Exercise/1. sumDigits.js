function sumDigits(number) {

    let numAsString = number.toString();
    //нова променлива, в която се записва подавания параметър (подаваното числато) преобразуван като стринг
    let sumOfNumsDigits = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);
        //ако тук е без Number резултата ще дойде като стринг, а той нама да може да се сумира
        //затова чрез Number метода отново го преобразуваме в число - за да може да се смумира

        sumOfNumsDigits += currentDigit;
    }
    console.log(sumOfNumsDigits);
}
sumDigits(9382470987633)

// for (let i = 0; i < numAsString.length-1; i++)
//- 1 се пише когато започвам от 0-в индекс, а кандишънала ми е <=; ако беше началото от 1 или само < на кандишънъла е без
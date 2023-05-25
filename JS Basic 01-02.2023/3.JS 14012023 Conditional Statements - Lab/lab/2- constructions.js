//  if - ако (нещо) направи (нещо)
//  else - във всички останали случаи
//  else - няма уславие! (това което се пише при if в ()) той се изпълнява винаги, когато проверките преди него са върнали като резултат - false 

// това долу е УСЛОВНА КОНСТРУКЦИЯ!

function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.50){
        console.log("Excellent!");
    } else {
        console.log("Not Excellent!");
    }

}
excellentResult(["6.00"]);
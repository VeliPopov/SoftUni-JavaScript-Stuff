// Проверява дали не е изпълнено дадено условиe
// Пример: 
// Проверка дали число е по-голямо от 10 и е четно:

function solve(input) {
    let number = Number(input[0]);
    let isValid = (number > 10) && (number % 2 == 0);
       if (!isValid) {
           console.log("Invalid");
       } else {
           console.log("Valid");
       }
   }
   
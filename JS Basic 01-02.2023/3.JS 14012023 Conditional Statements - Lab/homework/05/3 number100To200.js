function invalidNumber(input){
    let num = Number(input[0]);
    let isValid = num >= 100 && num <= 200;

    if (!isValid && num !== 0){
        console.log("invalid");
    }
}
//това е друг вариант, където създавам допълнителна променлива, която да проверява числото дали е между 100 и 200 (включително).
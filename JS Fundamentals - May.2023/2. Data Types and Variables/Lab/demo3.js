function demo() {

    if(true) {
        let name = 'Overkill'
        console.log(name);    //тук печати 
    }
    console.log(name);       //тук не


    //променливата е валидна само вътре в скоупа (обхвата), но не и извън него
}
demo()



//var - function scope variable
//var – use function scope – can be accessed anywhere in the function, including outside the initial block

//let - local scope variable - променливата е жива само в обхвата, в който е инициализирана
                                // ако let е инициализирана в обхвата на функцията е жива за цялата функцита
                                // а ако е инициализирана в отделен скоуп - достъпна е само в него
//let – use block scope – when declared inside a block {} can NOT be accessed from outside the block
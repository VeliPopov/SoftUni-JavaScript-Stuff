function password(input){
    let index = 0; 

    let name = input[index];
    index++; 

    let pass = input[index];
    index++;

    let tempPass = input[index];
    index++;

    while (pass !== tempPass) {   //* реално, проверката е вътре в самото уславие на цикъла (не може да бъде избегната или сбъркана)
        tempPass = input[index];  //* докато pass (passowrd) е различно от tempPass подменяй стойността на tempPass
        index++;
    }
    console.log(`Welcome ${name}!`);

}
password([
"Nakov",
"1234",
"Pass",
"1324",
"1234"]);

function greetingByName(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);

}
greetingByName(["William"]);





function byName2(input) {
    let name = input[0];
    let result = "Hello, " + name;
    result = result + "!";                      
    // премир за допълнително определяне на променлива! чрез КОНКАТЕНИРАНЕ!

    console.log(result);
}

byName2(["Pucho"]);
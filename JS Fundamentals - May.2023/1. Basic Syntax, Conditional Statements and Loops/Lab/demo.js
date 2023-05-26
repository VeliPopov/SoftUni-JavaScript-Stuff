function demo(name, age, city) {
    let buff = name + " " + age + " " + city;
    console.log(buff)

}
demo("V", "44", "Sofia")


function demo(name, age, city) {
    let buff = name;
    buff += " " + age;
    buff += " " + city;

    console.log(buff)

}
demo("V", "44", "Sofia")


// пример за запис на информация в буфер, по два различни начина. Резултата е един и същ. 
// просто синтаксисът е различен. В първия случай се конкатенира на един ред, във втория на три.

// долния пример е чрез интерполация:
function demo(name, age, city) {
    let buff = `${name} + ${age} + ${city}`;
    console.log(buff)

}
demo("V", "44", "Sofia")

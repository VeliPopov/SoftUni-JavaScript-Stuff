function arrayAdvanced() {

    let array = [1, 2, 3, 4];
    // array.map(e => e * 2); // върни всеки един елемент умножен по 2
    // map не променя (манипулира) оригиналния масив, а връща нов, който трябва да бъде дефиниран в променлива, за да може да бъде използван
    // създава нова референция - нов масив с отделна референция
    let newArray = array.map(e => e * 2);

    console.log(array);
    console.log(newArray);

}
arrayAdvanced()
function arrayAdvanced() {

    let array = [1, 7, 18, 12];
    array.sort((a, b) => a - b);
    // sort() не е нужно да бъде дефиниран в променлива - директно променя масива - сортира го
    // но работи по същия начин и ако е в променлива
    let sorted = (array.slice(0).sort((a, b) => a - b)); // нов масив - сортиран


    console.log(array);
    console.log(sorted);


}
arrayAdvanced()
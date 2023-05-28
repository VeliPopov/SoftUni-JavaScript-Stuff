// ▪ Iterates through all elements in a collection
// ▪ Cannot access the current index

function demo(arr) {
    let capitals = ['Sofia', 'Washington', 'London'];

    for (let el of capitals) {
        //създай нов елемент за всеки едни елемент от мaсива
        console.log(el);
    }

    for (let i = 0; i < capitals.length; i++) {
        console.log(capitals[i]);
    }
}
demo()

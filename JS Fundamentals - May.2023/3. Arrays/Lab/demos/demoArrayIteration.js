function demo() {
    let capitals = ['Sofia', 'Washington', 'London'];
    for (let i = 0; i < capitals.length; i++) {
        //няма = затва не е нужно да е lemgth - 1
        console.log(capitals[i]); // за всяка своя итерация искам да отпечатваш i
        console.log(capitals.toString());
        console.log(capitals.join(' / '));
    }
}
demo()

function demo() {
    let capitals = ['Sofia', 'Washington', 'London'];

    console.log(capitals.join('\n')); // изкарай всяка една стойност на нов ред
}
demo()
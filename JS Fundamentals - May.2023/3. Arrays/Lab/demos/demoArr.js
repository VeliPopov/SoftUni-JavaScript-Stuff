// in programming, the array is a sequence of elements
// ▪ We can store multiple values in one variable
// ▪ Elements are numbered from 0 to length-1 
//последният елемент винаги се намира на дължината на масива -1
//масива винаги връща клетките броейки ги от 1 (вместо от 0)
//индекса е отместването спряво първия елемент от масва, затова индексите започват с 0
// ▪ Arrays have variable sizes (Array.length) 

function demo(arr) {
    let numbers = [1, 2, 3, 4, 5];  //дефинирaн масив, името на променливата е без значение, [] дефинира масива
    let names = [];
    numbers[5] = 111;                 // +1 елемент на 5 индекс
    console.log(numbers.length);    //output 5 (+1 =6)
    console.log(names.length);      //0
    console.log(numbers[3]);       //достъпването на елемент от масива става с индексиращ оператор [] - //output 4
    console.log(numbers);          //(6) [1, 2, 3, 4, 5, 111]
    console.table(numbers);         //табличен вид 
}
demo()




function demo(arr) {
    let numbers = [1, 2, 3, 4, 5];
    numbers[3] = numbers[1] + numbers[2];   //заменя третия индекс със стойността на сбора от индекси 1 и 2
    console.log(numbers.length); // 5
    console.log(numbers); // [1, 2, 3, 5, 5]
    console.table(numbers);
}
demo()
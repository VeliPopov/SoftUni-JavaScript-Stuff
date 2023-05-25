//FIXME: обяснителния вариант на задачата - другия е по-правилен

function readText(input) {
    let index = 0; // 0 e защото не се зане колко итерации ще трябва да се направят (колко входа ще трябва да се проверят) 
     
    let text = input[index]; //* това е същото като index[0]
    index++;
    // text = input[index] //* input[1]
    // index++;
    // text = input[index] //* input[2]
   
    while (true) {
        if(text === 'Stop') {
            break;
        }
        console.log(text);
        text = input[index]; //подменям стойността на индекса, тъй като вече ми трябва втория индекс
        index++;             //цикъла на всяка итерация печата новата стойност на текст, и взима нова стойност от input на индекса
                             //подменя стойността в текст и инкрементира отново в индекса
    }

}
readText([
"Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);

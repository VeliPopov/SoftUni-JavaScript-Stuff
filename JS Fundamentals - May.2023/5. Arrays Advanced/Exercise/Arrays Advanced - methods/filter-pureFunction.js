function arrayAdvanced() {

    let array = [1, 2, 3, 4];
    // винаги e нежно уславие, с което да извлече елементите отговарящи на условието
    let filtered = array.filter(e => e % 2 === 0);

    // let output = [];
    // for(let index = 0; index < array.length; index++) {
    //     let currentNumber = array[index];
    //     if(currentNumber % 2 === 0){
    //         output.push(currentNumber);
    //     }        
    // }
    // цикъла прави същото като filter()
  

    console.log(array);
    console.log(filtered);

}
arrayAdvanced()
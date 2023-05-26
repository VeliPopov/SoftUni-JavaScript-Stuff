function printAndSum(start, end) {

    let sum = 0;
    let output = '';


    for (let index = start; index <= end; index++) {
        sum += index; //при всяка итерация към сумата се добавя (сумира) индекса, в който се намираме
        output += `${index} `;
        //използва се конкатенация за да се отпечати всичко на един ред последователно (постепенна конкатенация, с всяко завъртане на цикъла)
        //към аутпут променлвита горе, се добавям индекса и един СПЕЙС (за да не се долепят отделните индекси)
    }
    console.log(output);
    console.log(`Sum: ${sum}`);


}
printAndSum(50, 60)
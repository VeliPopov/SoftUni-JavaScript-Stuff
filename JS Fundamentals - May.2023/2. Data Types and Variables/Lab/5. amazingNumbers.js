function amazingNumbers(num) {

    let numAsText = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        sum += Number(numAsText[i]);
    }
    let isAmazing = sum.toString().includes('9') ? 'True' : 'False'

    console.log(`${num} Amazing? ${isAmazing}`);

}
amazingNumbers(333)
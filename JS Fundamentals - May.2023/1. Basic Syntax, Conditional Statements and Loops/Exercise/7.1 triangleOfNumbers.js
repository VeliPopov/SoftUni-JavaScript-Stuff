function triangleOfNumbers(number) {

    for (let rows = 1; rows <= number; rows++) {
        let result = '';
        for (let columns = 1; columns <= rows; columns++) {
            result += `${rows} `;

        }
        console.log(result);

    }
}
triangleOfNumbers(11)
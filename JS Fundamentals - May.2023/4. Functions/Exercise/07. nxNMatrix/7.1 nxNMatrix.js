function nxNMatrix(number) {

    function rowGenerator() {
        let row = '';

        for (let c = 1; c <= number; c++) {
            row += `${number} `;
        }
        return row;
    }
    for (let r = 1; r <= number; r++) {

        console.log(rowGenerator());
    }

}
nxNMatrix(3)
nxNMatrix(7)
nxNMatrix(2)
function nxNMatrix(number) {

    for (let r = 1; r <= number; r++) {
        let row = '';

        for (let c = 1; c <= number; c++) {
            row += `${number} `;
        }
        console.log(row);
    }   

}
nxNMatrix(3)
nxNMatrix(7)
nxNMatrix(2)
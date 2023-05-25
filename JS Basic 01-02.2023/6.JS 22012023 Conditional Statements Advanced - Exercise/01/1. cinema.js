function cinema(input) {
    let projectionType = input [0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalSeats = rows * columns;
    let income = 0;

    switch (projectionType) {
        case "Premiere": 
        income = 12.00 * totalSeats;            
            break;
        case "Normal":
        income = 7.50 * totalSeats;
            break;
        case "Discount":
        income = 5 * totalSeats;
            break;
        }
        console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere", "10", "12"]);
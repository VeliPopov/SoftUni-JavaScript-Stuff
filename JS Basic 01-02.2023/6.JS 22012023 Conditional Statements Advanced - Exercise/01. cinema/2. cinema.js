function cinema(input) {
    let projectionType = input [0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalSeats = rows * columns;
    let income = 0;

    if (projectionType === "Premiere") {
        income = 12.00 * totalSeats;
    } else if (projectionType === "Normal") {
        income = 7.50 * totalSeats;
    } else {
        income = 5 * totalSeats;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema(["Premiere", "10", "12"]);
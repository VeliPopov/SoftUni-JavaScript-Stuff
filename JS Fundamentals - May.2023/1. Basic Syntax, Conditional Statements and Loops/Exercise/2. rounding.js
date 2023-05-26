function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let result = parseFloat(number.toFixed(precision)); //parseFloat изрязва излишните знаци след запетаята
    console.log(result);
}
rounding(3.1415926535897932384626433832795, 2)
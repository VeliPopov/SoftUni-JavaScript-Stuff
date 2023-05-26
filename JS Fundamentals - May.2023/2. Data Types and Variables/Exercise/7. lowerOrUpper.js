function lowerOrUpper(param) {

    let caseTipe = '';

    if (param === param.toUpperCase()) {
        caseTipe = 'upper-case'
    } else {
        caseTipe = 'lower-case'
    }
    console.log(caseTipe);
}
lowerOrUpper('v')
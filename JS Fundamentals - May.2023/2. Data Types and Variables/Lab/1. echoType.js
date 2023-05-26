function echoType(param) {

    console.log(typeof param);

    if (typeof param === 'string' || typeof param === 'number') {
        //проверява и сравнява типа на подадения параметър 
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!')





function echo(param) {

    const dataType = typeof param;   //дефинера нова променлива, която е константа
    console.log(dataType);

    if (dataType === 'string' || dataType === 'number') {
        console.log(dataType);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

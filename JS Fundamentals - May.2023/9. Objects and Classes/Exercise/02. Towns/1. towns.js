function towns(params) {
    let output = [];

    //FIXME: Презаписва стойностите в масива и печати само втория град (ако са подадени два параметъра в един масив като вход)
    //FIXME: да пробвам да го оправя в даден момент

    params.forEach(element => {
        let [town, latitude, longitude] = element.split(" | ");
        
        let object1 = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)

        };
        output = JSON.parse(JSON.stringify(object1));

    });

    return output;

}

console.log(towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']));
console.log(towns(['Plovdiv | 136.45 | 812.575']));
function towns(params) {

    for (const townInfo of params) {
        let [town, latitude, longitude] = townInfo.split(" | ");

        let object = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };

        console.log(object);        
    }

}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);
function city(object) {

    for (let key of Object.keys(object)) {
        console.log(`${key} -> ${object[key]}`);
    }

}
// решение с дестроктуриране:
//     for (let [key, value] of Object.entries(object)) {
//         console.log(`${key} -> ${value}`);
//     }

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})


function inventory(params) {

    let heroes = [];

    for (const line of params) {

        let [name, level, items] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);

    for (const heroObject of heroes) {
        console.log(`Hero: ${heroObject.name}`);
        console.log(`level => ${heroObject.level}`);
        console.log(`items => ${heroObject.items}`);
    }


}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])

// по-добро?
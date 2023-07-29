function heroesOfCodeAndLogic(params) {

    let n = Number(params.shift());
    let heroes = {};

    for (let index = 0; index < n; index++) {
        let [name, HP, MP] = params.shift().split(' ');
        HP = Number(HP);
        MP = Number(MP);
        heroes[name] = { HP, MP };
    }

    for (let line of params) {
        if (line === 'End')
            break;

        let [command, heroName, firstArg, secondArg] = line.split(' - ');
        firstArg = Number(firstArg);

        if (command === 'CastSpell') {
            let neededMP = firstArg;
            let spellName = secondArg;

            if (heroes[heroName].MP >= neededMP) {
                heroes[heroName].MP -= neededMP;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {

            let damage = firstArg;
            let attacker = secondArg;
            heroes[heroName].HP -= damage;

            if (heroes[heroName].HP > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }
        } else if (command === 'Recharge') {

            let amount = Math.min(200 - heroes[heroName].MP, firstArg);
            heroes[heroName].MP += amount;

            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (command === 'Heal') {

            let amount = Math.min(100 - heroes[heroName].HP, firstArg);
            heroes[heroName].HP += amount;
            
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }

    for (let [heroName, heroData] of Object.entries(heroes)) {
        console.log(heroName);
        console.log(`  HP: ${heroData.HP}`);
        console.log(`  MP: ${heroData.MP}`);
    }
}
heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])
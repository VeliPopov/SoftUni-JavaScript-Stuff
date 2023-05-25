function solve(input) {
    let country = input[0];
    let category = input[1];
 
    let totalPoints = 0;
 
    switch (country) {
        case "Bulgaria":
            if (category === "ribbon") {
                totalPoints += (9.6 + 9.4);
            }
            if (category === "hoop") {
                totalPoints += (9.550 + 9.750);
            }
            if (category === "rope") {
                totalPoints += (9.5 + 9.4);
            }
            break;
        case "Russia":
            if (category === "ribbon") {
                totalPoints += (9.1 + 9.4);
            }
            if (category === "hoop") {
                totalPoints += (9.30 + 9.80);
            }
            if (category === "rope") {
                totalPoints += (9.6 + 9.0);
            }
            break;
        case "Italy":
            if (category === "ribbon") {
                totalPoints += (9.2 + 9.5);
            }
            if (category === "hoop") {
                totalPoints += (9.450 + 9.350);
            }
            if (category === "rope") {
                totalPoints += (9.7 + 9.150);
            }
            break;
    }
 
    let percent = (20 - totalPoints) / 20 * 100;
 
 
 
    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${category}.`)
    console.log(`${percent.toFixed(2)}%`)
}
 
solve(['Russia', 'rope'])
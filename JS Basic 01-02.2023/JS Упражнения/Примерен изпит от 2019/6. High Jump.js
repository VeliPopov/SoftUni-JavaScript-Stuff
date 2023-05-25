function solve(input) {
    let desiredHeight = Number(input[0]);
    let startingHeight = desiredHeight - 30;
 
    let jumps = 0;
    let unsuccesses = 0;
 
    for (let i = 1; i < input.length; i++) {
        let currentJump = Number(input[i]);
        if (currentJump > startingHeight) {
            jumps++;
            unsuccesses = 0;
            if (currentJump > desiredHeight && startingHeight >= desiredHeight) {
                console.log(`Tihomir succeeded, he jumped over ${startingHeight}cm after ${jumps} jumps.`)
                break;
            }
            startingHeight += 5;
        } else {
            unsuccesses++;
            jumps++;
            if (unsuccesses === 3) {
                console.log(`Tihomir failed at ${startingHeight}cm after ${jumps} jumps.`);
                break;
            }
        }
    }
 
}
 
solve(["231", "205", "212", "213", "228", "229", "230", "235"])
console.log(`------`);
solve(["250", "225", "224", "225", "228", "231", "235", "234", "235"])
 
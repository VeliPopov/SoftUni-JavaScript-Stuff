// (стъпка -1)


function solve(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i += 1) {
        console.log(i);
    }

    for (let i = n; i >= 1; i -= 1) {
        console.log(i);
    }


}
solve(["2"]);
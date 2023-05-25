function evenPowersOf2(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {  // i са степените - първо ги определям тях, а след това:
        console.log(Math.pow(2,i));    // Math.pow - повдига число на степен - в скобите се пише числото и степента, на която трябва да се повдигне
    }


}
evenPowersOf2(["7"]);
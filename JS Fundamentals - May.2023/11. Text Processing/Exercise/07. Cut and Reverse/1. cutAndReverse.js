function cutAndReverse(input) {

    let halfLength = Math.floor(input.length / 2);
    
    let firstHalf = input
        .substring(0, halfLength)
        .split('')
        .reverse()
        .join('');

    let secondHalf = input
        .substring(halfLength)
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');

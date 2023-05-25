function numbersEndingIn7() {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
numbersEndingIn7();


// вариант на решение, който е по-добър - съкръщава итерациите в кода
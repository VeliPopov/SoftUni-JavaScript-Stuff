function demo(num1, num2, name, age) {    // декларирани параметри | 1
    let addTwoNumbers = function(a, b) {  // декларирани параметри | 2
        console.log(a + b);
    }
    addTwoNumbers(num1, num2) // аргументи (извикване на функцията) | 2
    let textForPrint = `${name} - > ${age}`;
    console.log(textForPrint);
    
}
demo(18, 24, 'V', 37) // аргументи (извикване на функцията) | 1

//* затова имената са различни

// всяка една функция, при коуто не е дефинирано връщането на резултатта, връща undefined като резултат от изпълнението си
// всяка една функция е задължително да върне някакъв резултат - by default в JS функциите са замислени така
// функции, което не връщат нищо (или undefined) се наричат void функции
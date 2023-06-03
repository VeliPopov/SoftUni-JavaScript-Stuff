function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
}
// printHeader(); 

function formatGrade(grade) {
    // console.log(multiplyTwoNumbers(grade, 2));
    if (grade < 3) {
        // console.log(`Fail (2)`);
        print(`Fail (2)`);
    } else if (grade >= 3 && grade < 3.50) {
        // console.log(`Poor (${grade.toFixed(2)})`);
        print(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        // console.log(`Good (${grade.toFixed(2)})`);
        print(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        // console.log(`Very good (${grade.toFixed(2)})`);
        print(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        // console.log(`Excellent (${grade.toFixed(2)})`);
        print(`Excellent (${grade.toFixed(2)})`);
    }
}
// formatGrade(3.33)
// formatGrade(4.50)
// formatGrade(2.99)


function myMath(num, power) {

    let output = 1;
    for (let i = 0; i < power; i++) {

        output = multiplyTwoNumbers(output, num);
    }
    // console.log(output);
    print(output);

}
function multiplyTwoNumbers(a, b) {
    return a * b;
}
function print(value) {
    console.log(value);
}

// myMath(2, 8)
// myMath(3, 4)

// на две места има само извикване на функцията multiplyTwoNumbers, с подаване на различни параметри
// но функцията е дефинирана само на едно място, с конкретни аргументи

// при печатането на резултата, има значение реда на извикване на функциите
// първи се отпечатва резултата на първата извикана функция

// return (върни) е различно от console.log (печатай)

function repeatString(str, times) {

    let output = '';
    for (let index = 0; index < times; index++) {
        output += str;
        
    }
    return output;
}
// console.log(repeatString("abc", 3))
// console.log(repeatString("String", 2))
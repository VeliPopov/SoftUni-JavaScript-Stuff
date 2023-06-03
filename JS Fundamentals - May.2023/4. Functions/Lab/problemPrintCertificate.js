function printHeader() {
    console.log('~~~- {@} -~~~');
    console.log('~- Certificate -~');
    console.log('~~~- ~---~ -~~~');
}
function formatGrade(grade) {
    if (grade < 3) {
        print(`Fail (2)`);
    } else if (grade >= 3 && grade < 3.50) {
        print(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.50 && grade < 4.50) {
        print(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.50 && grade < 5.50) {
        print(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.50) {
        print(`Excellent (${grade.toFixed(2)})`);
    }
}
function pass(grade) {
    return grade >= 3;
}
function readFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function print(value) {
    console.log(value);
}
function printCertificate(grade, nameArray) {
    if (!pass(grade)) {
        return print(`${nameArray[0]} ${nameArray[1]} does not qualify`);
        
    }
    printHeader()
    print(readFullName(nameArray[0], nameArray[1]));
    formatGrade(grade);
}

printCertificate(5.25, ['Peter', 'Carter']);
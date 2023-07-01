function schoolGrades(params) {

    let students = new Map();

    for (let info of params) {

        let [student, ...grades] = info.split(' ');

        grades = grades.map(Number);

        if (!students.has(student)) {
            students.set(student, grades);
        } else {
            let currentGrades = students.get(student);
            students.set(student, currentGrades.concat(grades));
        }
    }

    let sortedStudents = Array.from(students.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, grades] of sortedStudents) {
        let averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])

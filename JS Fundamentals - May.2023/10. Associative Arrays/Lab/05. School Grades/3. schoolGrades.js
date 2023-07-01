function schoolGrades(params) {
    
    let students = new Map();

    for (let index = 0; index < params.length; index++) {

        let info = params[index].split(' ');
        let student = info[0];
        let grades = info.slice(1).map(Number); 

        if (!students.has(student)) {
            students.set(student, []);
        }

        let existingGrades = students.get(student);

        for (let j = 0; j < grades.length; j++) {
            existingGrades.push(grades[j]);
        }
    }

    [...students]
        .sort()
        .forEach(([student, grades]) => {
            let avgGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
            console.log(`${student}: ${avgGrade.toFixed(2)}`);
        });
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])

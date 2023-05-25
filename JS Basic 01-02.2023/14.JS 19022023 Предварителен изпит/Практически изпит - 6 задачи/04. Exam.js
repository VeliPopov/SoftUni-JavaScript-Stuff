function exam(input) {
    let students = Number(input[0]);

    let group1Count = 0;
    let group2Count = 0;
    let group3Count = 0;
    let group4Count = 0;

    let gradeSum = 0;

    for (let currentStudent = 1; currentStudent <= students; currentStudent++) {
        let grade = Number(input[currentStudent]);
        
        if (grade >= 2.00 && grade <= 2.99) {
            group1Count++;
        }else if (grade >= 3.00 && grade <= 3.99) {
            group2Count++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            group3Count++;
        } else if (grade >= 5.00) {
            group4Count++;
        }
        gradeSum += grade;
        

    }
    let topStudents = (group4Count / students) * 100;
    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    let goodStudents = (group3Count / students) * 100;
    console.log(`Between 4.00 and 4.99: ${goodStudents.toFixed(2)}%`);
    let averageStudents = (group2Count / students) * 100;
    console.log(`Between 3.00 and 3.99: ${averageStudents.toFixed(2)}%`);
    let failStudents = (group1Count / students) * 100;
    console.log(`Fail: ${failStudents.toFixed(2)}%`);

    let averageScore = gradeSum / students;
    console.log(`Average: ${averageScore.toFixed(2)}`);

}
exam([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);
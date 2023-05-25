function salary(input) {
    let browserTabs = Number(input[0]);
    let salary = Number(input[1]);

   
    for (let i = 2; i <= browserTabs +1; i++) {    //FIXME: нужна ми е допълнителната итерация, за да може цикъла да обходи всички възможни варианти
        let currentTab = input[i];   //много е важно това! без него не мога да взема отделния елемент от масива, при въртенето на индексите
        
        if (currentTab === "Facebook" ) {
            salary -= 150;
        } else if (currentTab === "Instagram" ) {
            salary -= 100;
        } else if (currentTab === "Reddit" ) {
            salary -= 50;
        }
     
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

;

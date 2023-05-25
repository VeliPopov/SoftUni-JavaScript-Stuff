function salary(input) {
    let browserTabs = Number(input[0]);
    let salary = Number(input[1]);

        for (let i = 0; i < browserTabs; i++) {    //TODO: това може би е най-адекватното решение
        let currentTab = input[i + 2];            //FIXME: цикъла пак започва от втория индекс, но по този начин прави пълни 10 итерации

        switch (currentTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;                
        }

    }
    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
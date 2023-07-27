function adAstra(input) {

    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let match;
    let totalCalories = 0;
    let items = [];

    while (match = pattern.exec(input)) {
        totalCalories += Number(match.groups['calories']);
        items.push(`Item: ${match.groups['item']}, Best before: ${match.groups['date']}, Nutrition: ${match.groups['calories']}`);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    items.forEach(item => console.log(item));
}

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

function shoppingList(params) {

    let list = params.shift().split('!');

    let index = 0;
    let command = params[index];
    index++;

    while (command !== "Go Shopping!") {
        let tokens = command.split(' ');
        let item;
        switch (tokens[0]) {
            case 'Urgent':
                item = tokens[1]
                if (!isValidIndex(list, item)) {
                    list.unshift(item);
                }
                break;

            case 'Unnecessary':
                item = tokens[1];
                if (isValidIndex(list, item)) {
                    list.splice(list.indexOf(item), 1);
                }
                break;

            case 'Correct':
                let oldItem = tokens[1];
                let newItem = tokens[2];
                let indexOfElement = list.indexOf(oldItem);
                if (isValidIndex(list, oldItem)) {
                    list[indexOfElement] = newItem;
                }
                break;

            case 'Rearrange':
                item = tokens[1];
                if (isValidIndex(list, item)) {
                    let currentItem = list.splice(list.IndexOf(item), 1);
                    list.push(currentItem[0]);
                }
                break;
        }
        command = params[index];
        index++;
    }
    console.log(list.join(', '));

    function isValidIndex(array, item){
        return array.includes(item);
    }

}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion", "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
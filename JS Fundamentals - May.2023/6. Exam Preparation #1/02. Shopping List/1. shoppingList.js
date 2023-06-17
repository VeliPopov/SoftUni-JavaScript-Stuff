function shoppingList(params) {
    let groceries = params.shift().split('!');

    while (params.length > 0) {
        let [command, firstItem, secondItem] = params.shift().split(' ');

        switch (command) {
            case 'Urgent':
                if (!groceries.includes(firstItem)) {
                    groceries.unshift(firstItem);
                }
                break;

            case 'Unnecessary':
                let index = groceries.indexOf(firstItem);
                if (index !== -1) {
                    groceries.splice(index, 1);
                }
                break;

            case 'Correct':
                let oldItemIndex = groceries.indexOf(firstItem);
                if (oldItemIndex !== -1) {
                    groceries[oldItemIndex] = secondItem;
                }
                break;

            case 'Rearrange':
                let itemIndex = groceries.indexOf(firstItem);
                if (itemIndex !== -1) {
                    groceries.splice(itemIndex, 1);
                    groceries.push(firstItem);
                }
                break;
        }
    }

    console.log(groceries.join(', '));
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

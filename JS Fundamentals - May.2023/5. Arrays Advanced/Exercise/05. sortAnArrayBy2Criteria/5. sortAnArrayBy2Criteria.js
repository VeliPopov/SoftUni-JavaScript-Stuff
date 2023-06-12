function sortAnArrayBy2Criteria(input) {
    
    let output = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
            // ако са с различни дължини -> сортирай ги по дължина
        }
        return a.localeCompare(b); // ако са с еднакви дължини -> сортирай ги по азбучен ред
    });
    console.log(output.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
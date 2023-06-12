function sortAnArrayBy2Criteria(array) {
    
    console.log(array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));

    // работи, ама по-добре НЕ по този начин

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
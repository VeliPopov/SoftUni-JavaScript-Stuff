function demo(params) {

    let result = new Map();
    // в Map ключовете не е задължително да са стрингове - могат да бъдат всякакви
    result.set('1', 1)
    result.set('2', 2)

    // сет приема ключ и стойност
    result.set('1', result.get('1') + 1);
    
    // презаписва стойността
    result.set('1', 10);
   
    console.log(result);
}
demo()
function demo(params) {
    
    let result = new Set();
    result.add(4)
    result.add(40)
    result.add(400)
    console.log(result.keys());
    
    for (let el of result) {
        console.log(el);
    }
}
demo()
function sorting(data) {
  
    let sortedArray = data.sort((a, b) => b - a); 
    let output = [];
    let dataLength = data.length; // дали ще работи така? и ако да - защо?

    for (let index = 0; index < dataLength / 2; index++) {
        let currentElement = sortedArray.shift(); 
        let lastElement = sortedArray.pop(); 
        output.push(currentElement);
        output.push(lastElement);
    }
    console.log(output.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
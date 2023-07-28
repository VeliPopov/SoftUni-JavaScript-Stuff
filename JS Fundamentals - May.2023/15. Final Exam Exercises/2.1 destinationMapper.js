function destinationMapper(input) {

    let pattern = /[=\/][A-Z][A-Za-z]{2,}[=\/]/gm;
    let points = 0;
    let destinations = [];

    let foundDestinations = input.match(pattern);

    if (foundDestinations) {
        foundDestinations.forEach(element => {
            if (element[0] === element[element.length - 1]) {
                element = element.substring(1, element.length - 1);
                destinations.push(element);
                points += element.length;
            }
        });
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");

function destinationMapper(input) {

    let pattern = /([=|\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    
    let destinations = [];
    let travelPoints = 0;
    
    let match = pattern.exec(input);
    while (match) {
        let place = match.groups['place'];
        destinations.push(place);
        travelPoints += place.length;
        match = pattern.exec(input);
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");

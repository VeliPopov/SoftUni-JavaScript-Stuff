function solve(input) {
 
    let racketPrice = Number(input[0]);
    let racketsCount = Number(input[1]);
    let sneakersCount = Number(input[2]);
 
    let racketsTotal = racketPrice * racketsCount;
 
    let sneakerPrice = racketPrice / 6;
 
    let sneakersTotal = sneakersCount * sneakerPrice;
 
    let equipmentTotal = (racketsTotal + sneakersTotal) * 0.2;
 
    let totalPrice = racketsTotal + sneakersTotal + equipmentTotal;
 
    let partDjokovic = totalPrice / 8;
    let partSponsors = totalPrice - partDjokovic;
 
    console.log(`Price to be paid by Djokovic ${Math.floor(partDjokovic)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(partSponsors)}`)
}
 
solve(['850', '4', '2']);
console.log('------')
solve(['386', '7', '4']);
 
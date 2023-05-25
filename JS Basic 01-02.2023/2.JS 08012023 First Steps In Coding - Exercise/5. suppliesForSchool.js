// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)

// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]




function suppliesForSchool(input) {
    let packetOfChemicals = Number(input[0]);
    let markerPacks = Number(input[1]);
    let litersOfChalkboardCleaner = Number(input[2]);
    let discount = Number(input[3]) / 100;


    let fullPriceOfChemicals = packetOfChemicals * 5.80;
    let fullPriceOfMarkers = markerPacks * 7.20;
    let fullPriceOfChalkboardCleaner = litersOfChalkboardCleaner * 1.20;

    let totalPrice = fullPriceOfChalkboardCleaner + fullPriceOfChemicals + fullPriceOfMarkers;

    let finalPrice = totalPrice - (totalPrice * discount);
    console.log(finalPrice);

}
suppliesForSchool(["2", "3", "4", "25"]);
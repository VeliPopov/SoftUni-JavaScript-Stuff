function summerOutfit(input) {
    let temperature = Number(input[0]);
    let timeOfDay = input[1];

    let outfit = '';
    let shoes = '';

    if (timeOfDay === 'Morning') {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    } else if (timeOfDay === 'Afternoon') {
        if (temperature >= 10 && temperature <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature > 18 && temperature <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
    } else {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["28","Evening"]);

function skiTrip(input) {
    let days = Number(input[0]);
    let roomTipe = input[1];
    let grade = input [2];

    let nights = days - 1;
    let price = 0;

    switch (roomTipe) {
        case "room for one person" :
            price = nights * 18.00;
           
            break;

        case "apartment":
            price = nights * 25.00;
            
            if (nights < 10) {
                price *= 0.70;
            } else if (nights <=15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }

            break;

        case "president apartment":
            price = nights * 35.00;
            if (nights < 10) {
                price *= 0.90;
            } else if (nights <=15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }

            break;
    
    }

    switch (grade) {
        case 'positive':
            price *= 1.25;
            break;
        case 'negative':
            price *= 0.90;

    }


    console.log(price.toFixed(2));

}
skiTrip(["14", "apartment", "positive"]);

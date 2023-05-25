// FIXME: да изкарам проверките извън switch-а 


function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let apartmentBill = 0;
    let studioBill = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioBill = nights * 50;
            apartmentBill = nights * 65;
            if (nights > 7 && nights < 14 && month === 'May' || month === 'October') {
                studioBill *= 0.95;
            } else if (nights > 14 && month === 'May' || month === 'October'){
                studioBill *= 0.70;
            } else if (nights > 14) {
                apartmentBill *= 0.90;
            }
            break;

        case 'June':
        case 'September':
            studioBill = nights * 75.20;
            apartmentBill = nights * 68.70;
            if (nights > 14 && month === 'June' || month === 'September') {
                studioBill *= 0.80;
            } else {
                apartmentBill *= 0.90;
            }
            break;

        case 'July':
        case 'August':
            studioBill = nights * 76;
            apartmentBill = nights * 77;
            if (nights > 14) {
                apartmentBill *= 0.90;
            }
            break;

    }
    console.log(`Apartment: ${apartmentBill.toFixed(2)} lv.`);
    console.log(`Studio: ${studioBill.toFixed(2)} lv.`);

}
hotelRoom(["June", "14"]);
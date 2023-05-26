function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let totalPrice = 0;

    switch (typeOfTheGroup) {
        case 'Students':
            if (dayOfTheWeek === 'Friday') {
                totalPrice = groupOfPeople * 8.45;

            } else if (dayOfTheWeek === 'Saturday') {
                totalPrice = groupOfPeople * 9.80;

            } else if (dayOfTheWeek === 'Sunday') {
                totalPrice = groupOfPeople * 10.46;

            }
            if (groupOfPeople >= 30) {
                totalPrice *= 0.85;
            }
            break;

        case 'Business':
            if (groupOfPeople >= 100) {    //ако проверката е в началото, първо смята отстъпката за релния брой хора, които трябва да платят
                groupOfPeople -= 10;
            }
            if (dayOfTheWeek === 'Friday') {
                totalPrice = groupOfPeople * 10.90;

            } else if (dayOfTheWeek === 'Saturday') {
                totalPrice = groupOfPeople * 15.60;

            } else if (dayOfTheWeek === 'Sunday') {
                totalPrice = groupOfPeople * 16;

            }

            break;

        case 'Regular':
            if (dayOfTheWeek === 'Friday') {
                totalPrice = groupOfPeople * 15;

            } else if (dayOfTheWeek === 'Saturday') {
                totalPrice = groupOfPeople * 20;

            } else if (dayOfTheWeek === 'Sunday') {
                totalPrice = groupOfPeople * 22.50;

            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40, "Regular", "Saturday")
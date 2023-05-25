function tradeCommissions(input) {
    let city = input[0];
    let salesVolume = Number(input[1]);
    let commission = 0;

    if (salesVolume >= 0 && salesVolume <= 500) {
        switch (city) {
            case "Sofia":
                commission = salesVolume * 0.05;
                break;
            case "Varna":
                commission = salesVolume * 0.045;
                break;
            case "Plovdiv":
                commission = salesVolume * 0.055;
        }
    } else if (salesVolume > 500 && salesVolume <= 1000) {
        switch (city) {
            case "Sofia":
                commission = salesVolume * 0.07;
                break;
            case "Varna":
                commission = salesVolume * 0.075;
                break;
            case "Plovdiv":
                commission = salesVolume * 0.08;
        }
    } else if (salesVolume > 1000 && salesVolume <= 10000) {
        switch (city) {
            case "Sofia":
                commission = salesVolume * 0.08;
                break;
            case "Varna":
                commission = salesVolume * 0.10;
                break;
            case "Plovdiv":
                commission = salesVolume * 0.12;
        }
    } else if (salesVolume > 10000) {
        switch (city) {
            case "Sofia":
                commission = salesVolume * 0.12;
                break;
            case "Varna":
                commission = salesVolume * 0.13;
                break;
            case "Plovdiv":
                commission = salesVolume * 0.145;
        }
    }
    //TODO: казваш, че нещо е вярно и след това казваш, че ако даде ДА Е ГРЕШНО -> да даде error
    //TODO: казваш, че нещо е грешно и след това казваш, че ако го ПОТВЪРДИ ДА Е ГРЕШНО -> да даде error
    let isValidCity = city === "Sofia" || city === "Varna" || city === "Plovdiv";
    let isValidsalesVolume = salesVolume < 0;
    
    if(isValidCity === false || isValidsalesVolume === true){
        console.log("error");
    } else {
        console.log(commission.toFixed(2));
    }
}
//tradeCommissions(["Kaspichan", "-50"]);
//tradeCommissions(["Sofia", "1500"]);
//tradeCommissions(["Plovdiv", "-20"]);
tradeCommissions(["Varna", "3874.50"]);




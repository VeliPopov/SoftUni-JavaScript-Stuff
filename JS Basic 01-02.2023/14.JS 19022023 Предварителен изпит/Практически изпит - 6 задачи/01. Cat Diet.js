function catDiet(input) {
    let fatPercentage = Number(input[0]);
    let proteinPercentage = Number(input[1]);
    let percentageOfCarbohydrates = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentageOfWaterContent = Number(input[4]);

    let fat = fatPercentage / 100;
    let protein = proteinPercentage / 100; 
    let carbohydrates = percentageOfCarbohydrates / 100;

    let fatPerGram = (totalCalories * fat) / 9;
    let proteinPerGram = (totalCalories * protein) / 4;
    let carbohydratesPerGram = (totalCalories * carbohydrates) /4;

    let totalGrams = fatPerGram + proteinPerGram + carbohydratesPerGram;


    let caloriesperGram = totalCalories / totalGrams;
    

    let waterContent = percentageOfWaterContent / 100;
    

    let calories = (caloriesperGram * waterContent) ;
    let finalcalories = caloriesperGram - calories;
    console.log(finalcalories.toFixed(4));




}
catDiet(["60",
"25",
"15",
"2500",
"60"])




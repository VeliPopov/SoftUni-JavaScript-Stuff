function walking(input) {
    let steps = 10_000 //оше в началото е хардкодната целта
    let allSteps = 0
   
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) { //check is number - проверява дали инпута е число, чете се: "ако инпута е различно от стринг команда"
        allSteps += Number(input[i])    
      } 
    }
     allSteps -= steps
   
    if (allSteps > 0) {
      console.log(`Goal reached! Good job!\n${allSteps} steps over the goal!`) //интересен начин да се извикват по 2 конзол лога
    } else {
      console.log(`${Math.abs(allSteps)} more steps to reach goal.`);
    }
  }
  walking(['1000', '1500', '2000', '6500'])
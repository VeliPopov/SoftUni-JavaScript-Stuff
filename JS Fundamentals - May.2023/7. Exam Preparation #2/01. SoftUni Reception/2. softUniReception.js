function softUniReception(params) {

    let firstEmployeeefficiency = Number(params.shift());
    let secondEmployeeefficiency = Number(params.shift());
    let thirdEmployeeefficiency = Number(params.shift());
    let studentsCount = Number(params.shift());

    let answersPerHour = firstEmployeeefficiency + secondEmployeeefficiency + thirdEmployeeefficiency;
    let hours = 0;

    while (studentsCount > 0) {
        hours++;
        studentsCount -= answersPerHour;

        if (hours % 4 === 0) {
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
      
}
softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40']) 
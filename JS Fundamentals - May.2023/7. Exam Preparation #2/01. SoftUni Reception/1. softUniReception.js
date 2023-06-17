function softUniReception(params) {
    let efficiency = params.slice(0, 3).map(Number);
    let studentsCount = Number(params[3]);

    let totalEfficiency = efficiency.reduce((a, b) => a + b, 0);
    let hours = 0;

    while (studentsCount > 0) {
        hours++;
        if (hours % 4 !== 0) {
            studentsCount -= totalEfficiency;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])
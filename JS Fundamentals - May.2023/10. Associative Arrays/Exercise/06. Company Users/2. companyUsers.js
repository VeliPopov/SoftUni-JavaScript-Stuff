// plain object

function compnyUsers(input) {
    
    let companies = {};

    input.forEach(pair => {
        let [company, id] = pair.split(' -> ');

        if (!companies.hasOwnProperty(company)){
            companies[company] = [];
        
        }
        companies[company].push(id);
    });
    sortedCompanies = Object.entries(companies);

    sortedCompanies.sort((a,b)=> a[0].localeCompare(b[0]));

    for (const iterator of sortedCompanies) {
        let companyName = iterator[0];
        console.log(companyName);

        let set = new Set(iterator[1]);

        for (const employee of set) {
            console.log(`-- ${employee}`);
        }
    }
    
}
compnyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
compnyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])
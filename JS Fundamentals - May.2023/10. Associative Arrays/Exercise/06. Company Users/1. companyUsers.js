// with Map

function compnyUsers(input) {
    
    let companies = new Map();

    input.forEach(line => {
        let [company, id] = line.split(' -> ');

        if (!companies.has(company)) {
            companies.set(company, new Set());
        }

        companies.get(company).add(id);
    });

    // Sort companies by name
    let sortedCompanies = [...companies].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sortedCompanies) {
        console.log(company);
        for (let id of employees) {
            console.log(`-- ${id}`);
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

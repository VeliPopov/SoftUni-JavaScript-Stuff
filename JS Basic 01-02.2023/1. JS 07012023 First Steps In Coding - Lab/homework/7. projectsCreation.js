// "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function projectsCreation(input) {
    let architect = input[0];
    let totalProjects = Number(input[1]);
    let draftProjectTime = 3;
    
    let totalTimeNeeded = totalProjects * draftProjectTime;

    console.log(`The architect ${architect} will need ${totalTimeNeeded} hours to complete ${totalProjects} project/s.`);
}

projectsCreation(["Sanya", "9"]);
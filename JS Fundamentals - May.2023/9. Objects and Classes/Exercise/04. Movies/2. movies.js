function movies(params) {

    let movieNames = [];

    params.forEach(element => {

        if (element.includes('addMovie')) {
            let name = element.split('addMovie ')[1];
            movieNames.push({ name });

        } else if (element.includes('directedBy')) {

            let [name, director] = element.split(' directedBy ');

            let movie = movieNames.find(m => m.name === name);
            // find - връща true или false

            if (movie) {
                movie.director = director;
            }

        } else if (element.includes('onDate')) {

            let [name, date] = element.split(' onDate ');

            let movie = movieNames.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }
        }

    });

    movieNames.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }

    });

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])


// по-добро?
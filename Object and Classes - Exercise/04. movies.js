function movies(data){
    class Movie {
        constructor(name, director, date){
            this.name = name;
            this.director = director;
            this.date = date;           
        }
    }
    
    let movies = [];

    for (let item of data) {
        if (item.includes("addMovie")){
            item = item.split("addMovie ");
            let movieName = item[1];
            movies.push(new Movie(movieName));
        }else if (item.includes("directedBy")){
            item = item.split(" directedBy ");
            let movieName = item[0];
            let movieDirector = item[1];
            for (const movie of movies) {
                if(movie.name === movieName){
                    movie.director = movieDirector;
                }
            }
        }else if (item.includes("onDate")){
            item = item.split(" onDate ");
            let movieName = item[0];
            let movieDate = item[1];
            for (const movie of movies){
                if(movie.name === movieName){
                    movie.date = movieDate;
                }
            }
        }
    }
    for (const movie of movies) {
        if(movie.name !== undefined && movie.director !== undefined && movie.date !== undefined){
            console.log(JSON.stringify(movie));
        }
    }
}

movies ([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
)
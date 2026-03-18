const movies = [
    {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
    {"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
    {"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
    {"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
    {"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700}
]



//1: short title Movie(movies);
function findShortTitleMovies(movies){
    return movies.filter(movie =>
        movie.title.split(" ").length <= 2
    );
}


console.log(findShortTitleMovies(movies))

//2: long title Movie(movies);
function findLongeMovie(movies){
    return movies.filter(movie=>
        movie.title.split(" ").length>2
        
    );
    
}

//console.log(findLongeMovie(movies));

//3 Count Movie
function movieFromToYear(movies){
    const moviesFromTo=movies.filter(item=>{
        return item.year>=1980 && item.year<=1989;
        
    });
    return {title:'Movie From 1980 to 1989',count: moviesFromTo.length};
    
}

//4 add tag 
function addMovieTag(movies){
    return movies.map((movie)=>{ if (movie.rating>=7) return {...movie, tag:'Good'}
                        if ((movie.rating>=4)&&(movie.rating<7)) return {...movie, tag:'Average'}
                        if (movie.rating<4) return {...movie, tag:'Bad'}
                        
        
    });
}
//console.log(addMovieTag(movies));
//console.log((movies));

//5: movie with over ranking 6
function topRankMovie(movies){
    return movies.filter(movie=>movie.rating>6).map(movie=>movie.rating);
}


//console.log(topRankMovie(movies));

// task 6
function countKeywordMovies(movies){
    const movieTitle=movies.map(movie=>{return movie.title.toLowerCase()});
    return movieTitle.filter(movie=>{return movie.includes('surfer')||movie.includes('alien')||movie.includes('benjamin')}).length;
}
//console.log(countKeywordMovies(movies));


//task 7
function DuplicatedWord(movies){
    return movies.filter(movie=>{
        const words=movie.title.toLowerCase().split(" ");
        return words.some(word=>{return words.indexOf(word)!==words.lastIndexOf(word)})
        

    });
    
    
}
//console.log(DuplicatedWord(movies));

/* const movieContainer=document.getElementById('container');
const ltitle=document.getElementById('ltitle');
const navitems=document.querySelectorAll('#nav li');
navitems.forEach(item =>{item.addEventListener('click',()=>{
    navitems.forEach(li=>{li.classList.remove('active')});
    item.classList.add('active');
    movieContainer.innerHTML='';
    if (item.getAttribute('id')==='stitle')showMovie(movies);
     if (item.getAttribute('id')==='count')movieFromToYear(movies);


})
});
 */
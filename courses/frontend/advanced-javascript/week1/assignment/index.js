
import {movies} from './movies.js';
let dataIsReady=false;

//1: short title Movie(movies);
function findShortTitleMovies(movies){
    return movies.filter(movie =>
        movie.title.split(" ").length <= 2
    );
}


//2: long title Movie(movies);
function findLongMovie(movies){
    return movies.filter(movie=>
        movie.title.split(" ").length>10
        
    );
    
}



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


//5: movie with over ranking 6
function topRankMovie(movies){
    return movies.filter(movie=>movie.rating>6).map(movie=>movie.rating);
}



// task 6
function countKeywordMovies(movies){
    const movieTitle=movies.map(movie=>{return movie.title.toLowerCase()});
    return movieTitle.filter(movie=>{return movie.includes('surfer')||movie.includes('alien')||movie.includes('benjamin')}).length;
}



//task 7
function duplicatedWord(movies){
    return movies.filter(movie=>{
        const words=movie.title.toLowerCase().split(" ");
        return words.some(word=>{return words.indexOf(word)!==words.lastIndexOf(word)})
        

    });
    
}


//Calculate the average rating
function averageMoviesRating(movies){
    
    return movies.reduce((movieSum,movie)=>{return movieSum+movie.rating;},0)/movies.length;
}


//Count the total number
function countRatingMovie(movies){
    const movieTagedArray=addMovieTag(movies);
    
    return movieTagedArray.reduce((acc,movie)=>{
        if(movie.tag==='Good') acc.Good++;
        else if(movie.tag==='Average') acc.Avg++;
        else acc.Bad++;
        return acc;
    },{Good:0,Avg:0,Bad:0});
    

}


function createCard(title, contentArray) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    contentArray.forEach(item => {
        const p = document.createElement("p");
        p.classList.add("content");
        p.innerText = item;
        cardContent.appendChild(p);
    });
    

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

function renderAllCards(movies) {
    const grid = document.getElementById("cardGrid");
    const progress= document.getElementById("progress");
    progress.innerText="Data is loading ..."
    grid.innerHTML = "";

    // Task 1
    const shortTitles = findShortTitleMovies(movies).map(m => m.title);
    grid.appendChild(createCard("Short Titles", shortTitles));

    // Task 2
    const longTitles = findLongMovie(movies).map(m => m.title);
    grid.appendChild(createCard("Long Titles", longTitles));

    // Task 3
    const count = movieFromToYear(movies).count;
    grid.appendChild(createCard("1980s Count", [count]));

    // Task 4
    const tagged = addMovieTag(movies).map(m => `${m.title} → ${m.tag}`);
    grid.appendChild(createCard("Tagged Movies", tagged));

    // Task 5
    const ratings = topRankMovie(movies);
    grid.appendChild(createCard("Ratings > 6", ratings));

    // Task 6
    const keywordCount = countKeywordMovies(movies);
    grid.appendChild(createCard("Keyword Count", [keywordCount]));

    // Task 7
    const duplicated = duplicatedWord(movies).map(m => m.title);
    grid.appendChild(createCard("Duplicated Titles", duplicated));

    //Task 8
    const averageMovieRating = averageMoviesRating(movies).toFixed(2);
    grid.appendChild(createCard("Avrage Movie Rating", [averageMovieRating]));

    //Task 9
    const countMovieRating=countRatingMovie(movies);
    const formatted = Object.entries(countMovieRating).map(([key,val])=>`${key}:${val}`);
    grid.appendChild(createCard("Count Moveis Rating",formatted));

    progress.innerText="";

}

renderAllCards(movies);
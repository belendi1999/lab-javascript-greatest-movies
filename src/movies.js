// The `movies` array from the file `src/data.js`.
const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirector = movies.map((film) =>{
    return film.director
  })
  return allDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let stevenSpielbergDramaMovies = movies.filter((cadaPeli, index) =>{
    
      return cadaPeli.director === "Steven Spielberg" && cadaPeli.genre.includes("Drama")
  })
  return stevenSpielbergDramaMovies.length
  

}






// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  let sumScores = 0
   movies.map((movie) => {
     if (!!movie.score ){
       sumScores += movie.score
       
     }
  })
let average = sumScores/movies.length
return Number(average.toFixed(2))
}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let onlyDramaMovies = movies.filter((cadaPeli, index)=>
  {
    let agrupation = cadaPeli.genre.includes("Drama")
    return Number(agrupation)
  })

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let aux = movies.map((movie) => {
    return movie;
  });
  return aux.sort((movie1, movie2) => { 
    if(movie1.year === movie2.year){
      return movie1.title.localeCompare(movie2.title)
    }
    return movie1.year - movie2.year
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    let orderedTitles = movies.map((movie) => movie.title)
    
    return orderedTitles.sort(function(element1, element2) {if (element1 < element2) {return -1}}).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

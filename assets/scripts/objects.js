// define list of movies as global
const movies = [];

// define pointer to list of movies
const movieList = document.getElementById('movieList')

//define pointer to element button add
const addButton = document.getElementById('addButton')
const filterButton = document.getElementById("filterButton")

// define render function
const renderItem = (keyword = '') => {
   movieList.innerHTML = ""
   
   const filteredMovies = keyword !== '' ? 
                          movies.filter(movie =>     
                             movie.info.title.includes(keyword)) : 
                          movies
   filteredMovies.forEach((movie) => {
      const newEl = document.createElement('li')
      let text = movie.info.title + ' - ';
      for(const key in movie.info){
         if(key !== 'title'){
            text += ` ${key} : ${movie.info[key]}`
         }
      }
      newEl.textContent = text
      movieList.append(newEl)
   });
}

// define adding item function
const addHandler = () => {
  const title = document.getElementById('title').value
  const extraKey = document.getElementById('extraKey').value
  const extraValue = document.getElementById('extraValue').value
  if(title.trim() === "" ||
     extraKey.trim() === "" ||
     extraValue.trim() === ""
  )
     return 

  const newMovie = {
     info : {
        title,
        [extraKey] : extraValue 
     },
     id : Math.random()

   }
   movies.push(newMovie)      
   renderItem()
}


const filterHandler = () => {
   const keyword = document.getElementById('filter').value
   renderItem(keyword)
 }
 
 

// add event listener to user click on addButton
addButton.addEventListener('click', addHandler)

// add event listener to user click on searchButton
filterButton.addEventListener('click', filterHandler)

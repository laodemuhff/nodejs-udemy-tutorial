// define list of movies as global
const movies = [];

// define pointer to list of movies
const movieList = document.getElementById('movieList')

//define pointer to element button add
const addButton = document.getElementById('addButton')

// define render function
const renderItem = () => {
  movieList.innerHTML = ""
   movies.forEach((movie) => {
      const newEl = document.createElement('li')
      let text = movie.info.title + ' - '
      for(const key in movie.info){
         if(key !== 'title'){
           text = text + ` ${key} : ${movie.info[key]}`
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

// add event listener to user click on btnAdd
addButton.addEventListener('click', addHandler)


const person = {
  salary : 5000000
}

console.log(person['salary']);
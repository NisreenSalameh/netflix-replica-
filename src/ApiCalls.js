const fetchActionMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=28")
.then((res) => res.json()) 
.then((data) => data.results)
.catch ((error) => console.log(error))


const fetchComedyMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=35")
.then((response) => response.json())
.then((data) => data.results)
.catch(error => console.log(error))



const fetchHorrorMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=27")
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))


const fetchByPopularity = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&by=popularity.desc")
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))

const fetchDocumentariesMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=99")
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))

const fetchFamilyMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=10751")
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))

const fetchRomanceMovies = () => fetch("https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=10749")
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))


export {fetchActionMovies, fetchComedyMovies, fetchHorrorMovies, fetchByPopularity,  fetchDocumentariesMovies, fetchFamilyMovies, fetchRomanceMovies}
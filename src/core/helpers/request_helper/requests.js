const ApiKey = "4edfec507e5263481f8e939ed0c4e2a2"
const baseUrl ='https://api.themoviedb.org/3/discover/movie?api_key='
const urlWithApiKey = baseUrl + ApiKey


const fecthMoviesGenres = (genresNumber) =>fetch(`${urlWithApiKey}&with_genres=${genresNumber}`)
.then((response) =>{
    return response.json()
})
.then((data) =>{
    return data.results
})
.catch((error) => {
    console.log(error)
})

const fecthMoviesByPoularity = () =>fetch(`${urlWithApiKey}&by=popularity.desc`)
.then((response) =>{
    return response.json()
})
.then((data) =>{
    return data.results
})
.catch((error) => {
    console.log(error)
})


export {fecthMoviesByPoularity, fecthMoviesGenres}


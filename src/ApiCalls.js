// import { error } from 'console'
import requests from './API'

const fetchActionMovies = async() =>{
try{
    // console.log("hiii")
    // console.log("hello",requests.ActionMoviesUrl)
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=27');
    const data = await res.json();
    // console.log("apicall", data.results)
    return data.results
}
catch (error){
    console.log(error)
}
}
const fetchComedyMovies = ()  =>fetch(requests.ComedyMoviesUrl)
.then((response) =>{
    return response.json()
})
.then((data) =>{
    return data.results
})
.catch(error => {
    console.log(error)
})

const fetchHorrorMovies = () =>fetch(requests.HorrorMoviesUrl)
.then((response) =>{
    return response.json()
})
.then((data) =>{
    return data.results
})
.catch((error) => {
    console.log(error)
})

export {fetchActionMovies, fetchComedyMovies, fetchHorrorMovies}

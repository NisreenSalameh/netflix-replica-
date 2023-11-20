// import { error } from 'console'
import requests from './API'


const fetchActionMovies = () => fetch(requests.ActionMoviesUrl)
.then((res) => res.json()) 
.then((data) => data.results)
.catch ((error) => console.log(error))


const fetchComedyMovies = () => fetch(requests.ComedyMoviesUrl)
.then((response) => response.json())
.then((data) => data.results)
.catch(error => console.log(error))



const fetchHorrorMovies = () => fetch(requests.HorrorMoviesUrl)
.then((response) => response.json())
.then((data) => data.results)
.catch((error) => console.log(error))

export {fetchActionMovies, fetchComedyMovies, fetchHorrorMovies}
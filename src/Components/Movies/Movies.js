import { useState, useEffect,  } from "react"
import {fetchActionMovies, fetchComedyMovies, fetchHorrorMovies, fetchByPopularity, fetchDocumentariesMovies, fetchFamilyMovies, fetchRomanceMovies} from "../../ApiCalls"
import Slide from '../movies slide/slide'

export default function Movies(){
    const [movies, setMovies] = useState({})
    
    
    useEffect(() =>{
        // call the imported fetchMovies
        // the return value is an object key(movie genre) : value(fetched object)
        const fechdata = async() =>{
        let mapMovies = new Map()

            const actionMoviesList = await fetchActionMovies()
            mapMovies.set('action',actionMoviesList )
            
            const horrorMoviesList = await fetchHorrorMovies()
            mapMovies.set('horror', horrorMoviesList)

            const comedyMoviesList = await fetchComedyMovies()
            mapMovies.set('comedy', comedyMoviesList)
            
            const byPopularityMoviesList = await fetchByPopularity()
            mapMovies.set('popularity', byPopularityMoviesList)

            const documentariesList = await fetchDocumentariesMovies()
            mapMovies.set('documentary', documentariesList)

            const familyMoviesList = await fetchFamilyMovies()
            mapMovies.set('family', familyMoviesList)

            const romanceMoviesList = await fetchRomanceMovies()
            mapMovies.set('romance', romanceMoviesList)

            setMovies(mapMovies)
        }
        // change movies(useState) to an object with key:value
        fechdata()
    },[])
    
    let actionMovies; let horrorMovies; let comedyMovies; let popularMovies ; let documentaries; let familyMovies; let romanceMovies

    if (movies.size) {
         actionMovies = movies.get('action')
         horrorMovies = movies.get('horror')
         comedyMovies = movies.get('comedy')
         popularMovies = movies.get('popularity')
         documentaries = movies.get('documentary')
         familyMovies = movies.get('family')
         romanceMovies = movies.get('romance')
    }
    return(
        <>
            <div className="slider-wrapper">
                <div className="slider-header">
                    <h1>Movies</h1> 
                    <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
                </div>
                    {actionMovies && <Slide arrOfMovies = {actionMovies} genre = "Action Movies"/>} 
                    {horrorMovies && <Slide arrOfMovies = {horrorMovies} genre = "Horror Movies"/>}
                    {comedyMovies && <Slide arrOfMovies = {comedyMovies} genre = "Comedy Movies"/>} 
                    {popularMovies && <Slide arrOfMovies = {popularMovies} genre = "Popular Movies"/>}  
                    {documentaries && <Slide arrOfMovies = {documentaries} genre = "Documentaries"/>}  
                    {familyMovies && <Slide arrOfMovies = {familyMovies} genre = "Family Movies"/>}  
                    {romanceMovies && <Slide arrOfMovies = {romanceMovies} genre = "Romance Movies"/>}  
            </div>
        </>
    )
}
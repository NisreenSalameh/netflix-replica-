import { useState, useEffect,  } from "react";
import { fetchActionMovies, fetchComedyMovies, fetchHorrorMovies } from "../../ApiCalls";
import Slide from '../movies slide/slide'

export default function Movies(){
    const [movies, setMovies] = useState({})

    useEffect(() =>{
        // call the imported fetchMovies
        // the return value is an object key(movie genre) : value(fetched object)
        const fechdata = async() =>{
            let mapMovies = new Map();

            try{
                const actionMoviesList = await fetchActionMovies();
                mapMovies.set('action',actionMoviesList )
            }
            catch(error){
                console.log(error)
            }

            try{
                const horrorMoviesList = await fetchHorrorMovies();
                mapMovies.set('horror', horrorMoviesList)
            }
            catch(error){
                console.log(error)
            }

            try{
                const comedyMoviesList = await fetchComedyMovies();
               mapMovies.set('comedy', comedyMoviesList)
            }
            catch(error){
                console.log(error)
            }

            setMovies(mapMovies)
        }
        // change movies(useState) to an object with key:value
        fechdata()
    },[])
    
    let actionMovies 
    let horrorMovies
    let comedyMovies

    if (movies.size) {
         actionMovies = movies.get('action')
         horrorMovies = movies.get('horror')
         comedyMovies = movies.get('comedy')
    }

    return(
        <>
            {actionMovies && <Slide arrOfMovies = {actionMovies} />} 
            {horrorMovies && <Slide arrOfMovies = {horrorMovies} />}
            {comedyMovies && <Slide arrOfMovies = {comedyMovies} />}       
        </>
    )


}
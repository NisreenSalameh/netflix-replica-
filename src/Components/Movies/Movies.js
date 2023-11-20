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
            setMovies(mapMovies);
        }
        
        // change movies(useState) to an object mapMovies with the movie key:value
        fechdata()
    },[])
    console.group(movies)
    return(
        <>
            <Slide />
        </>
    )


}
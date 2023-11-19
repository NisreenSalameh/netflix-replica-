import { useState, useEffect,  } from "react";
import { fetchActionMovies, fetchComedyMovies, fetchHorrorMovies } from "../../ApiCalls";

export default function Movies(){
    const [movies, setMovies] = useState({})
    useEffect(() =>{
        const fechdata = async() =>{
            let mapMovies = new Map();
            try{
                const actionMoviesList = await fetchActionMovies();
                // console.log(actionMoviesList);
                // mapMovies.set("action ", actionMoviesList)
                // console.log(mapMovies)
                let arr = actionMoviesList;
                mapMovies.set('action',arr )
                // console.log(mapMovies)
            }
            catch(error){
                console.log(error)
            }

            try{
                const horrorMoviesList = await fetchHorrorMovies();
                // console.log(horrorMoviesList);
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
        
        fechdata();
    },[])

    if(movies){
        const listofmovies = movies.get('action')
        console.log(listofmovies);
    }
    
    return(
        <>

        </>
    )


}
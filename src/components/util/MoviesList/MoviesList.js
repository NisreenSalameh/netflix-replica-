import './MoviesList.css'
import { useState, useEffect, useRef } from 'react'; 
import { fecthMoviesByPoularity, fecthMoviesGenres } from '../../../core/helpers/request_helper/requests';

export default function MoviesList({genre, genreNumber}){
    const [movies, setMovies] =useState([]);
    let [translateValue, setTranslateValue] = useState(0)
    const left = "<"
    const right = ">"
    const sliderRef = useRef(null)
    

    useEffect(() => {
    const fetchData = async () => {
        if(genre ==null){
            try{
                const moviesList = await fecthMoviesByPoularity();
                setMovies(moviesList);
            }catch(error){
                console.log(error);
            }         
        }
        else{
            try {
                const moviesList = await fecthMoviesGenres(genreNumber);
                setMovies(moviesList);
                } catch (error) {
                console.error(error);
            } 
        }     
    };

    fetchData(); 
    }, []);

    function slide_left (){
        const  slider = sliderRef.current
        if (slider){
        if (translateValue !== 0){
            slider.style.transform = `translateX(${translateValue + 20}%)`
            setTranslateValue(translateValue + 20)
            }
        }
    }

    function slide_right (){ 
        const  slider = sliderRef.current
        if (slider) {
        if (translateValue !== -80){
            slider.style.transform = `translateX(${translateValue - 20}%)`
            setTranslateValue(translateValue - 20) 
            }
        }
    }

   let img_url= "https://image.tmdb.org/t/p/w500/"
    return(
        <>
        <div className='slider-container-spans'>   
            <div className="slider-container">
                <p>{genre}</p>
                <span id='span-left' className='span-left' onClick={slide_left}> {left}</span>
                <div className="slider" ref={sliderRef}>
                  {movies && (movies.map(movie => 
                      <div key = {movie.id} className = 'slider-inner-content'>                      
                        <div className = 'slider-img-container'>
                            <img src= {img_url + movie.backdrop_path} alt='movie'></img>
                        </div>
                        <p>{movie.title}</p>
                      </div>
                  ))}
                </div>
                <span id='span-right' className='span-right' onClick={slide_right}> {right} </span>
            </div>
          </div>
      </>
    )
}
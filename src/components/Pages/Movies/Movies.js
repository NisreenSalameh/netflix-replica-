import './Movies.css'
import MoviesList from './MoviesList'
import requests from '../../../requests'

export default function Movies(){

    //
    // const [movies, setMovies] = useState([]) 
    // const getMovies = () =>{
        
    //     fetch(requests.fetchActionMovies)
    //     .then(res => res.json())
    //     .then(json => setMovies(json.results))
    // }

    // useEffect(() =>{ 
    //     getMovies()
    // },[])



    return(
        <div className='movies-container'>
            <div className='movies-text'>
                <div className='movie-container-title'>
                    <h1>Movies</h1>
                </div>
                <div className='movies-description'>
                    <p>
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic,
                    romantic or anywhere in-between. So many titles, so much to experience.
                    </p>
                </div>
            </div>
            <MoviesList />
        </div>
    )
}

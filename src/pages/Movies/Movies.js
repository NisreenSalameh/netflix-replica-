import './Movies.css'
import MoviesList from '../../components/util/MoviesList/MoviesList'
import moviesGenresIdMap from '../../core/helpers/request_helper/moviesGenresId';

export default function Movies(){

    const slideComponents = Object.entries(moviesGenresIdMap).map(([genre, genreNumber]) => (
        <MoviesList key={genre} genre={genre} genreNumber={genreNumber} />
      ));

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
            <div className='slider-content'>
                <MoviesList genre = "Popular on Netflix" />
                {slideComponents}
            </div>
            <div className='more-netflix'>
                <div className='more-netflix-title'>
                    <h2>There’s even more to watch.</h2>
                </div>
                <div className='more-netflix-text'>
                    <p>
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                     award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                    </p>
                </div>
                <div className='more-netflix-btn'>
                    <button>JOIN NOW</button>
                </div>
            </div>

        </div>
    )
}

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
            <MoviesList genre = "Popular on Netflix" />
            {slideComponents}
        </div>
    )
}

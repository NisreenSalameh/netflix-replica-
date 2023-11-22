import { useLocation } from "react-router"
import "./styles.css"

function MovieDetails (props) {
  const location = useLocation() 
  const movieObj = location.state.movie 
  const img_url = "https://image.tmdb.org/t/p/w1280/"
  const year = movieObj.release_date.split("-")[0]

  return <> 
    <div className="new-movie-wrapper" style={{ backgroundImage: `url(${img_url + movieObj.backdrop_path})` }}>
                                      
      <div className="shadow">
        <div className="new-move-text-container">
            <p>{movieObj.title}</p>
            <div>
                <p className="grey-clr">{year} |</p>
                <p className="grey-clr">{movieObj.adult ? "Adults" : "Family"}</p>
                <p className="grey-clr">| Rating: {movieObj.vote_average} |</p>
                <p className="grey-clr">{location.state.genre}</p>
            </div>
            <p>{movieObj.overview}</p>
        </div>
    </div>
  </div>
  </>
}

export default MovieDetails
import { useLocation } from "react-router"
import "./styles.css"

function MovieDetails () {
  const location = useLocation() 
  const movieObj = location.state.movie 
  const img_url = "https://image.tmdb.org/t/p/w1280/"
  const year = movieObj.release_date.split("-")[0]

  return <> 
    <div className="new-movie-wrapper" style={{ backgroundImage: `url(${img_url + movieObj.backdrop_path})` }}>
      <div className="shadow">
        <div className="new-movie-text-container">
            <p>{movieObj.title}</p>
            <div>
                <p className="details">{year} |</p>
                <p className="details">{movieObj.adult ? "Adults" : "Family"}</p>
                <p className="details">| Rating: {movieObj.vote_average} |</p>
                <p className="details">{location.state.genre}</p>
            </div>
            <p>{movieObj.overview}</p>
        </div>
    </div>
  </div>
  </>
}

export default MovieDetails
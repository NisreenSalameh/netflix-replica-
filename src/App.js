import React, { useState, useEffect } from 'react'
import './App.css'
import requests from './API'
import Navbar from './Components/Navbar/Navbar'
import Slide from './Components/movies slide/slide'

function App() {
  const [movieData, setMovieData] = useState(null)

  useEffect(() => {
    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=4edfec507e5263481f8e939ed0c4e2a2&with_genres=27')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        
        const firstMovie = data
        setMovieData(firstMovie)
      })
      .catch((error) => console.log(error))

    },[]) // Empty dependency array to run the effect only once
    console.log(movieData)



  return (
    <>
      <Navbar />
      <Slide/>
      {/* truthy syntax to ensure movieData is not null, undefined, false, 0, or an empty string. otherwise it won't render*/}
      {movieData && (
        <>
          <h1>{movieData.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`} alt={movieData.title} />
          <p>{movieData.overview}</p>
        </>
      )}
    </>
  )
}

export default App
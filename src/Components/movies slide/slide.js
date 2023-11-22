import React, { useRef, useState } from 'react'
import './slides.css'

function Slide({arrOfMovies, genre}){  

  const [currentDate, setCurrentDate] = useState(new Date())
  console.log(currentDate)

  const left = "<"
  const right = ">"
  const sliderRef = useRef(null)
  let [translateValue, setTranslateValue] = useState(0)


  function slide_left (){
    const  slider = sliderRef.current
    if (slider){
      if (translateValue !== 0){
        slider.style.transform = `translateX(${translateValue + 20}%)`
        setTranslateValue(translateValue + 20)
        console.log(translateValue)
      }
    }
  }

  function slide_right (){ 
    const  slider = sliderRef.current
    if (slider) {
      if (translateValue !== -80){
        slider.style.transform = `translateX(${translateValue - 20}%)`
        setTranslateValue(translateValue - 20) 
        console.log(translateValue)
    }
  }
}

const img_url = "https://image.tmdb.org/t/p/w500/"
return <>

        <div className='slider-container-spans'>   
            <div className="slider-container">
                <p>{genre}</p>
                <span id='span-left' className='span-left' onClick={slide_left}> {left}</span>
                <div className="slider" ref={sliderRef}>

                  {arrOfMovies && (arrOfMovies.map(movie => 
                      <div className = 'slider-inner-content'>
                            <div key = {movie.id}>
                              <div className = 'slider-img-container'>
                                  <img src= {img_url + movie.backdrop_path} alt='movie'></img>
                              </div>
                              <p>{movie.title}</p>
                            </div>
                      </div>
                  ))}

                </div>
                <span id='span-right' className='span-right' onClick={slide_right}> {right} </span>
            </div>
          </div>
      </>
}
export default Slide
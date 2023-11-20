import React, { useRef, useEffect, useState } from 'react'
import './slides.css'

function Slide({arrOfMovies, genre}){  

  const left = "<"
  const right = ">"
  const sliderRef = useRef(null)
  let [translateValue, setTranslateValue] = useState(0)

  useEffect(() => {
    sliderRef.current.innerHTML = ''

    arrOfMovies.forEach(movie =>{
      const slider_inner_content = document.createElement("div")
      slider_inner_content.className = 'slider-inner-content'
      
      const slider_img_container = document.createElement('div')
      slider_img_container.className = 'slider-img-container'

        
      const slider_img = document.createElement('img')
      slider_img.src = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path // location of image should be image url direction
      slider_img.alt = 'movie'

      const slider_p = document.createElement('p')
      slider_p.textContent = movie.title // p text should be image title

      slider_inner_content.appendChild(slider_img_container)
      slider_inner_content.appendChild(slider_p)
      slider_img_container.appendChild(slider_img)

      sliderRef.current.appendChild(slider_inner_content)
    })
    
  })

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


return <>
        <div className='slider-container-spans'>   
            <div className="slider-container">
                <p>{genre}</p>
                <span id='span-left' className='span-left' onClick={slide_left}> {left}</span>
                <div className="slider" ref={sliderRef}>

                  {/* js forEach */}
                  
                </div>
                <span id='span-right' className='span-right' onClick={slide_right}> {right} </span>
            </div>
          </div>
      </>
}
export default Slide
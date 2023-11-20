import React, { useRef, useEffect } from 'react'
import './slides.css'

function Slide(){  

  const left = "<"
  const right = ">"
  const sliderRef = useRef(null)


  // This will receive from Api file, an object of images, titles and movie titles

  const image_location = ['/slider-images/purple.jpg', '/slider-images/purple.jpg', '/slider-images/purple.jpg', '/slider-images/purple.jpg', '/slider-images/purple.jpg'];
  
  useEffect(() => {
    sliderRef.current.innerHTML = ''
    
    image_location.forEach(location =>{
      const slider_inner_content = document.createElement("div")
      slider_inner_content.className = 'slider-inner-content'
      
      const slider_img_container = document.createElement('div')
      slider_img_container.className = 'slider-img-container'

      const slider_img = document.createElement('img')
      slider_img.src = process.env.PUBLIC_URL + location
      slider_img.alt = 'movie'
      
      const slider_p = document.createElement('p')
      slider_p.textContent = 'Purple Heart'

      slider_inner_content.appendChild(slider_img_container)
      slider_inner_content.appendChild(slider_p)
      slider_img_container.appendChild(slider_img)

      sliderRef.current.appendChild(slider_inner_content)
    }, [image_location])
    
  })


  function slide_left (){
    const  slider = sliderRef.current
    if (slider){
      slider.style.transform = "translateX(-40%)"
    }
  }

  function slide_right (){ 
    const  slider = sliderRef.current
    if (slider){
      slider.style.transform = "translateX(0%)"
    }
  }

  

return <>

        <div className="slider-wrapper">

          <div className="slider-header">
            <h1>Movies</h1> 
            <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
          </div>

            <div className='slider-container-spans'>
              <div className="slider-container">
                <p>Popular on Netflix</p>
                <span id='span-left' className='span-left' onClick={slide_left}> {left}</span>
                <div className="slider" ref={sliderRef}>

                  {/* js forEach */}
                  
                </div>
                <span id='span-right' className='span-right' onClick={slide_right}> {right} </span>
              </div>
            </div>
        </div>

      </>
}
export default Slide
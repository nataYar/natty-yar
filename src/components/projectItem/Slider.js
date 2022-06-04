import React from 'react';
import './slider.css'

const Slider = ({ mobileImg, img, img2, video, parentCallback }) => {
  
  const fullScreen = (e) => {
    parentCallback(e.currentTarget.src)
  }

  return (
    <div className='slider'>
      {
        video ? 
        <div className='video-wrapper shadow'>
          <iframe 
          loading='lazy'
          src={video} 
          title='YouTube video player' 
          frameBorder='0' 
          allow='fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
          ></iframe>
        </div>
        :
       <div className='portfolio-pic-container'>
         <img src={img2} />
       </div>
        
      }

      <div className='btm-container'>
        <div className='slide shadow' >
          <img className='main-img'
          loading='lazy' 
          src={img} 
          alt='project image' 
          onClick={ (e) => fullScreen(e) }
           />
        </div>
        {
          mobileImg ? 
          <div className='slide shadow'>
            <img className='mobile-img'
            loading='lazy' 
            src={mobileImg} 
            alt='mobile image' 
            onClick={ (e) => fullScreen(e) }/>
          </div>
          : null
        }
      </div>
      
      
      
    </div>
  )
}

export default Slider;

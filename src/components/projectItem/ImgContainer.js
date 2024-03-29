import React from 'react';
import './ImgContainer.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const ImgContainer = ({ mobileImg, name, img, img2, video, parentCallback }) => {
  
  const fullScreen = (e) => {
    parentCallback(e.currentTarget.src)
  }

  return (
    <div className='slider'>
      {
        video ? 
        <div className='video-wrapper shadow'>
            <LiteYouTubeEmbed 
                id={video}
                title={name}
                noCookie={true} 
                playerClass="lite-youtube-btn"
                wrapperClass="lite-youtube-wrapper"
            />
        </div>
        : img2 ?
       <div className='portfolio-pic-container'>
         <img src={img2} alt='exta image' />
       </div> : null
        
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

export default ImgContainer;

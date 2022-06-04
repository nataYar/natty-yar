import React from 'react';
import './projectItem.css';
import Slider from './Slider'

const ProjectItem = ({ tabletView, name, url, git, img, img2, description, technologies, features, challenges, video, mobileImg }) => {

  const handleModalImg = (childData) => {
    document.getElementById('myModal').style.top = '0%';
    document.getElementById('myModal').style.opacity = '1';
    // document.getElementById('myModal').classList.add = 'modal-animation';
    document.getElementById('imgModal').src = childData;
  }

  const closeModal = () => {
    document.getElementById('myModal').style.top = '100%';
    document.getElementById('myModal').style.opacity = '0';
    // document.getElementById('myModal').classList.remove = 'animation';
  }

  return (
    <div className='project-container'> 
      <div className='project-name'>
        <h3>{name}</h3>
          <div className='links'>
            <a href={`${url}`} target='_blank'>
              <div className='highlight-purple highlight-font'>live</div>
            </a>
            <a href={`${git}`} target='_blank'>
              <div className='highlight-purple highlight-font'>code</div>
            </a>
        </div> 
      </div>

      <div id='myModal' className='modal' onClick={ () => closeModal() } >
        <img className='modal-content' id='imgModal' />
      </div>

      <div className='title-side'>
        { 
          tabletView ?  <p className='project-description'> {description}</p> : null
        }
        
        <Slider parentCallback={ handleModalImg } mobileImg={mobileImg} img={img} img2={img2} video={video} />
      
      </div>
        
      <div className='description-side'>
        {
          !tabletView ?  <p className='project-description'>{description}</p> : null
        }
        <p className='project-description'><span className='highlight-purple highlight-font'>Featutes: </span>{features}</p>
        <p className='project-description'><span className='highlight-purple highlight-font'>Challenges: </span>{challenges}</p>
        <p className='project-description highlight-purple highlight-font'>{technologies}</p>
      </div>
    </div>
  )
}

export default ProjectItem;
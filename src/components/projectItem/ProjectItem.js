import React, { useEffect } from 'react';
import './projectItem.css';

const ProjectItem = ({ tabletView, width, name, url, git, img, description, technologies, features, challenges }) => {
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

      <div className='title-side'>
        { 
          tabletView ?  <p className='project-description'> {description}</p> : null
        }
        <div className='project-img-container'>
          <img className='project-main-img' src={img} alt='project img'/>
        </div>
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
import React, { useEffect, useLayoutEffect } from 'react';
import './projectItem.css';
import ImgContainer  from './ImgContainer';
import { prContainerFn } from '../service/animation'

const ProjectItem = ({ tabletView, width,  name, url, git, img, img2, description, technologies, features, challenges, video, mobileImg }) => {

  useLayoutEffect(() => {
    const oddChild = document.querySelectorAll('.project-item:nth-child(odd) .project-description');
    const evenChild = document.querySelectorAll('.project-item:nth-child(even) .project-description');
    prContainerFn(oddChild, evenChild)
  }, [width]) // <- empty dependency Array so it doesn't re-run on every render


  const handleModalImg = (childData) => { 
    document.getElementById('myModal').style.top = '0%';
    document.getElementById('myModal').style.opacity = '1';
    document.getElementById('imgModal').src = childData;
  }

  const closeModal = () => {
    document.getElementById('myModal').style.top = '100%';
    document.getElementById('myModal').style.opacity = '0';
  }

  return (
    <div className='project-container'> 
      <div className='project-name'>
        <h3 className='project-name-animation'>{name}</h3>
        <div className='links'>
          <a href={`${url}`} target='_blank'>
            <div className='highlight-purple highlight-font' rel='noreferrer'>live</div>
          </a>
          <a href={`${git}`} target='_blank' rel='noreferrer'>
            <div className='highlight-purple highlight-font'>code</div>
          </a>
        </div> 
      </div>

      <div id='myModal' className='modal' onClick={ () => closeModal() } >
        <img className='modal-content' id='imgModal' alt='full image'/>
      </div>

      <div className='title-side'>
        { 
          tabletView ?  <p className='project-description'> {description}</p> : null
        }
        <ImgContainer parentCallback={ handleModalImg } name={name} mobileImg={mobileImg} img={img} img2={img2} video={video} />
      </div>
      <div className='description-side'>
        {
          !tabletView ?  <p className='project-description'>{description}</p> : null
        }
        {
          features ?
          <p className='project-description'><span className='highlight-purple highlight-font'>Features: </span>{features}</p> 
          : null
        }
        <p className='project-description'><span className='highlight-purple highlight-font'>Challenges: </span>{challenges}</p>
        <p className='project-description highlight-purple highlight-font'>{technologies}</p>
      </div>
    </div>
  )
}

export default ProjectItem;
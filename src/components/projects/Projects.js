import React from 'react';
import ProjectItem from '../projectItem/ProjectItem';
import './projects.css';

import { chatImg, notesImg, weatherImg, gameImg, portfolioImg, portfolioImg2, 
  weatherMob, notesMob, chatMob, portfolioMob 
} from '../service/importsImg';

const Projects = ( { tabletView } ) => {

  const projectsArray = [
    { id: '1',
      name: 'chat app',
      url: 'https://auth-81336.web.app/signup',
      git:'https://github.com/nataliaYarr/react-messenger',
      img: chatImg,
      description: 'Real-time chat where users can interact with each other by sending messages/ documents/ images.',
      features: 'sign/log in via email. Responsive design. Messages are saved in a database. Users can select and send emojis. Unread messages notification. Gradient background changing color',
      technologies: 'React Firebase HTML CSS',
      challenges: 'application of Firebase API. Making the layout responsive (implemented with Grid, Flexbox)',
      video:'MxP0aQvJ0eg',
      mobile: chatMob,
    },
    { id:'2',
      name: 'note app',
      url: 'https://todolist-beb72.web.app/',
      git: 'https://github.com/nataliaYarr/to-do-list',
      img: notesImg,
      description: 'App where users can save and alter notes real-time and add drawings from canvas',
      features: 'canvas (web and mobile) for creating notes. Categories and texts can be changed and stored real-time. Tasks\' filter. Responsive design. Messages are saved in a database',
      technologies: 'Google/Git/Facebook Auth Firebase React HTML CSS',
      challenges: 'authentication. Making canvas work on touch-screen devices. Making tasks editable and being able to save them in a database' ,
      video:'asPq4ZmpJm8',
      mobile: notesMob,
     
    },
    {
      id:'3',
      name: 'weather app',
      url: 'https://weather-wizard-74435.web.app/',
      git:'https://github.com/nataliaYarr/weather-app',
      img: weatherImg,
      description: 'Weather app with city pictures displayed',
      features: 'search for the city. A city picture been displayd based on a city search. Responsive design',
      technologies: 'Shutterstock API AccuWeather API React Firebase HTML CSS',
      challenges:'application of new APIs',
      video:'E4HxxayC6XU', 
      mobile: weatherMob
    },
    {
      id:'4',
      name: 'web game',
      url: 'https://topper-52e80.web.app/',
      git:'https://github.com/nataliaYarr/topper',
      img: gameImg,
      description: 'Lead the frog by jumping onto the shrinking leaves to a safe place',
      technologies: 'JavaScript HTML CSS',
      challenges: 'reconstruction of a specific arcade game',
      features: 'vanilla JavaScript web game',
      video:'9MJqrUT0r3s'
    },
    {
      id:'5',
      name: 'Portfolio website',
      url: 'https://www.natyar.com/',
      git:'https://github.com/nataliaYarr/natty-yar',
      img: portfolioImg2,
      img2: portfolioImg,
      mobile: portfolioMob,
      description: 'Resporsive personal portfolio, mobile-first design',
      technologies: 'GSAP Adobe Illustrator React JavaScript HTML CSS',
      challenges: 'React hooks (useState, useEffect, useRef), GSAP animation, responsive images and layout, creating SVG images (Adobe Illustrator), YouTube videos use facades for better performance'
    }
  ]

  return (
    <div className='projects-container' id='section-projects'>
      <h3 className='section-title'>Projects/</h3>
      {
        projectsArray.map(el => {
          return (
            <div className='project-item' key={el.id}>
              <ProjectItem 
              tabletView={tabletView} 
              name={el.name} 
              url={el.url}
              git={el.git}
              img={el.img}
              img2={el.img2}
              description={el.description}
              technologies={el.technologies}
              features={el.features}
              challenges={el.challenges}
              video={el.video}
              mobileImg={el.mobile}
              />
            </div>
          )
        })
        
      }
    </div>
  )
}

export default Projects
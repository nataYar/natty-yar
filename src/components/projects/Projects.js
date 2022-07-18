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
      description: 'Real-time chat where users can interact with each other by sending messages/ documents/ images',
      features: 'sign/log in via email. Messages are saved in a database. Users can select and send emojis. Unread messages notification. Gradient background changing color',
      technologies: 'React Firebase HTML CSS',
      challenges: 'applied Firebase API for instant messaging and storing data. Made the layout responsive (implemented with Grid, Flexbox)',
      video:'MxP0aQvJ0eg',
      mobile: chatMob,
    },
    { id:'2',
      name: 'notes app',
      url: 'https://todolist-beb72.web.app/',
      git: 'https://github.com/nataliaYarr/to-do-list',
      img: notesImg,
      description: 'App where users can save and alter notes real-time and add drawings from canvas',
      features: 'canvas (web and mobile) for creating notes. Categories and texts can be changed and stored real-time. Tasks\' filter. Responsive design implemented with Masonry.js and Flexbox.',
      technologies: 'Google/Git/Facebook Auth Firebase React HTML CSS',
      challenges: 'introduced authentication. Made canvas work on touch-screen devices. Made possible to edit and store tasks in a database' ,
      video:'asPq4ZmpJm8',
      mobile: notesMob,
     
    },
    {
      id:'3',
      name: 'weather app',
      url: 'https://weather-wizard-74435.web.app/',
      git:'https://github.com/nataliaYarr/weather-app',
      img: weatherImg,
      description: 'Weather app with city pictures displayed on search',
      features: 'search for the city. A city picture is taken from Shutterstock. Responsive design.',
      technologies: 'Shutterstock API AccuWeather API React Firebase HTML CSS',
      challenges:'applied new APIs',
      video:'E4HxxayC6XU', 
      mobile: weatherMob
    },
    {
      id:'4',
      name: 'web game',
      url: 'https://topper-52e80.web.app/',
      git:'https://github.com/nataliaYarr/topper',
      img: gameImg,
      description: 'Lead the frog to a safe place by jumping onto the randomly appering shrinking leaves',
      technologies: 'JavaScript HTML CSS',
      challenges: 'recreated a specific arcade game',
      features: 'vanilla JavaScript web game',
      video:'9MJqrUT0r3s'
    },
    {
      id:'5',
      name: 'Portfolio website',
      url: 'https://www.natayar.com/',
      git:'https://github.com/nataliaYarr/natty-yar',
      img: portfolioImg2,
      img2: portfolioImg,
      mobile: portfolioMob,
      description: 'Resporsive personal portfolio, mobile-first design',
      technologies: 'GSAP Adobe Illustrator React JavaScript HTML CSS',
      challenges: 'used React hooks (useState, useEffect, useRef), GSAP animation, made images and layout responsive, created SVG images (Adobe Illustrator) and logo, used facades for better performance (YouTube embeded videos)'
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
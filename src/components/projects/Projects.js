import React from 'react';
import ProjectItem from '../projectItem/ProjectItem';
import './projects.css';

import { chatImg, notesImg, weatherImg, gameImg, portfolioImg, portfolioImg2, weatherMob, notesMob, chatMob, portfolioMob } from './importsImg'

const Projects = ( {tabletView} ) => {
  const projectsArray = [
    { id: '1',
      name: 'chat app',
      url: 'https://auth-81336.web.app/signup',
      git:'https://github.com/nataliaYarr/react-messenger',
      img: chatImg,
      description: 'Real-time chat where users can interact with each other by sending messages/ documents/ images.',
      features: 'Sign/log in with an email. Responsive design. Messages are saved in a database. User can select and send an emoji. Unread messages notification. Gradient background changing color',
      technologies: 'React, Firebase, HTML, CSS',
      challenges: 'apply Firebase API. Make the layout responsive (implemented with Grid)',
      video:'https://www.youtube.com/embed/MxP0aQvJ0eg',
      mobile: chatMob,
      
    },
    { id:'2',
      name: 'note app',
      url: 'https://todolist-beb72.web.app/',
      git: 'https://github.com/nataliaYarr/to-do-list',
      img: notesImg,
      description: 'An app where a user can save and alter the notes real-time and add a drawing from canvas',
      features: 'draw with Canvas (web and mobile). Categories and texts can be changed and stored in real time. User can filter the tasks. Responsive design. Messages are saved in a database',
      technologies: 'Google/Git/Facebook Auth, Firebase, React, Masonry JS, HTML, CSS',
      challenges: 'make canvas work on touch-screen devices. Make tasks editable and be able to save them immediately in a database' ,
      video:'https://www.youtube.com/embed/asPq4ZmpJm8',
      mobile: notesMob,
     
    },
    {
      id:'3',
      name: 'weather app',
      url: 'https://weather-wizard-74435.web.app/',
      git:'https://github.com/nataliaYarr/weather-app',
      img: weatherImg,
      description: 'Weather app with local pictures displayed',
      features: 'search for the city. Picture of a city been displayd on a search. Responsive design',
      technologies: 'Shutterstock API, AccuWeather API, React, Firebase, HTML, CSS',
      challenges:'?????',
      video:'https://www.youtube.com/embed/E4HxxayC6XU', 
      mobile: weatherMob
    },
    {
      id:'4',
      name: 'web game',
      url: 'https://topper-52e80.web.app/',
      git:'https://github.com/nataliaYarr/topper',
      img: gameImg,
      description: 'Direct a frog by jumping on the shrinking leaves to a safe leaf',
      technologies: 'JavaScript, HTML, CSS',
      challenges: 'Reconstruct an arcade game I played as a child',
      features: 'A simple Web game built with pure JavaScript',
      video:'https://www.youtube.com/embed/9MJqrUT0r3s'
    },
    {
      id:'5',
      name: 'Portfolio website',
      url: 'https://www.natyar.com/',
      git:'https://github.com/nataliaYarr/natty-yar',
      img: portfolioImg2,
      img2: portfolioImg,
      mobile: portfolioMob,
      description: 'Resporsive personal portfolio with contact information',
      technologies: 'React, JavaScript, HTML, CSS, GSAP, EmailJS, Adobe Illustrator',
      challenges: 'Logo and svg animation in contact form drawn in Illustrator, React hooks (useState, useEffect, useRef), GSAP animation'
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
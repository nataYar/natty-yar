import React, { useEffect } from 'react';
import ProjectItem from '../projectItem/ProjectItem';
import './projects.css';
import chatImg from '../../images/screens/laptop/chat.png';
import notesImg from '../../images/screens/laptop/notes.png';
import weatherImg from '../../images/screens/laptop/weather.png';
import gameImg from '../../images/screens/laptop/game.png';

const Projects = ( {tabletView, width} ) => {
  const projectsArray = [
    { id: '1',
      name: 'chat app',
      url: 'https://auth-81336.web.app/signup',
      git:'https://github.com/nataliaYarr/react-messenger',
      img: chatImg,
      description: 'Real-time chat where users can interact with each other by sending messages/ documents/ images.',
      features: 'Sign/log in with an email. Responsive design. Messages are saved in a database. User can select and send an emoji. Unread messages notification. Gradient background changing color',
      technologies: 'React, Firebase, HTML, CSS',
      challenges: 'apply Firebase API. Make the layout responsive (implemented with Grid)'
    },
    { id:'2',
      name: 'note app',
      url: 'https://todolist-beb72.web.app/',
      git: 'https://github.com/nataliaYarr/to-do-list',
      img: notesImg,
      description: 'An app where a user can save and alter the notes real-time and add a drawing from canvas',
      features: 'draw with Canvas (web and mobile). Categories and texts can be changed and stored in real time. User can filter the tasks. Responsive design. Messages are saved in a database',
      technologies: 'Google/Git/Facebook Auth, Firebase, React, Masonry JS, HTML, CSS',
      challenges: 'make canvas work on touch-screen devices. Make tasks editable and be able to save them immediately in a database' 
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
      challenges:'?????'
    },
    {
      id:'4',
      name: 'web game',
      url: 'https://topper-52e80.web.app/',
      git:'https://github.com/nataliaYarr/topper',
      img: gameImg,
      description: 'Lead a frog to a safe leaf with a flag on',
      technologies: 'JavaScript, HTML, CSS',
      challenges: '??????',
      features: ''
    }
  ]

//   import { projectNameFn } from '../animation.js'
// const projectNamesArray = [];
//   const names = document.querySelectorAll('.project-name')
  
//   useEffect(() => { 
//     projectNameFn()
//   }, [names]) 

console.log(projectsArray)
  return (
    <div className='projects-container' id='section-projects'>
      <h3 className='section-title'>Projects/</h3>
      {
        projectsArray.map(el => {
          return (
            <div className='project-item' key={el.id}>
              <ProjectItem 
              tabletView={tabletView} 
              width={width}
              name={el.name} 
              url={el.url}
              git={el}
              img={el.img}
              description={el.description}
              technologies={el.technologies}
              features={el.features}
              challenges={el.challenges}
              />
            </div>
          )
        })
        
      }
    </div>
  )
}

export default Projects
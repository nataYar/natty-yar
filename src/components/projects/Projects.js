import React from 'react';
import ProjectItem from '../projectItem/ProjectItem';
import './projects.css';

import { chatImg, notesImg, bmoreImg, weatherImg, gameImg, portfolioImg, portfolioImg2, 
  weatherMob, notesMob, chatMob, portfolioMob, homeApplianceMob, homeAppliance, bmoreMob, healthhubMob, healthhubImg
} from '../service/importsImg';

const Projects = ( ) => {

  const projectsArray = [
    {
      name: 'Health Hub',
      url: 'https://health-hub-8ags.vercel.app/dashboard',
      git:'https://github.com/nataYar/health-hub',
      img: healthhubImg ,
      description: 'A comprehensive fitness tracking web app with AWS Amplify, Next.js, and Material UI, empowering users to log their weight, set goals, track exercises, and visualize their progress through charts and graphics. The app allows users to register and log in securely, providing a personalized experience.',
      features: 'User Authentication and data storage: Implement secure user registration, login, content management functionality using AWS Amplify. Exercise and Food Tracking: Enable users to log their exercise sessions, to keep track of their fitness activities. Interactive Charts: Visualize user data using advanced charting libraries to provide meaningful insights into their fitness journey. Nutrient and Exercises Search: Utilize the EDAMAM API and ExerciseDB API to allow users to search and log nutrients for their meals, fostering healthy eating habits and search exercises. Goal Setting: Allow users to set fitness and health goals and monitor their progress towards achieving them.',
      technologies: 'AWS Amplify | Next.js | Material UI | React hooks | EDAMAM API | ExerciseDB API',
      challenges:'Implementing Advanced State Management: Utilize React Context and Amplify\'s data management capabilities to handle complex user data and application state.',
      video:'dECOWdDHjeM',
      mobile: healthhubMob 
    },
    {
      name: 'BMORE bar',
      url: 'https://bmorebar.netlify.app/',
      git:'https://github.com/nataYar/bmore_bar',
      img: bmoreImg,
      description: 'React web app with a modern design for clients and a functional dashboard for an admin to easily manage data with Firebase',
      features: 'Authentication, and password reset. React routing separates functional components for easier data management. Add/delete food items and categories. Edit names, prices, and notes for each food/drink. Easy data management for events - add an image, and choose a date. The content and layout of the Events component change according to the data passed to it from the database. Modern responsive design for mobile, tablet, laptop  screens (created with Flexbox, media queries).',
      technologies: 'Tailwind  | React router | GSAP | Firebase | HTML | CSS',
      challenges:'Applied advanced React best practices such as file structure, hooks, and refs. Used React Context for advanced State management of the entire application. Successfully implemented GSAP and React in one project without animation breaking',
      video:'EykqDSM4X6Q', 
      mobile: bmoreMob
    },
    { 
      name: 'CityTech web app with blog',
      url: 'https://home-appliances-b8f33.web.app/',
      git:'https://github.com/nataYar/home-appliances',
      img: homeAppliance,
      description: 'A web app for a private business built with React hooks, with an admin dashboard to manage blog and reviews',
      features: 'Admin dashboard for managing blog and clients\' reviews. Forms for scheduling a call and add a review. Filter function for displaying articles and brands a visitor is interested in. An appealing design using corporate\'s color palette',
      technologies: 'SASS  Draft.js Firebase React(hooks) HTML', 
      challenges: 'used Draft.js and Firebase for creating and displaying styled articles on the website. Implemented React Components to reduce code and increase reusability (articles and reviews). Used Firebase API for storing data. Included SASS mixins for easier control throughout styling. Used Routing to move between pages. Incorporated React hooks, Flexbox and media queries to adjust layout according to a screen size.',
      video:'5h4L4_jHmkI',
      mobile: homeApplianceMob,
    },
    { 
      name: 'chat app',
      url: 'https://auth-81336.web.app/signup',
      git:'https://github.com/nataliaYarr/react-messenger',
      img: chatImg,
      description: 'Real-time chat where users can interact with each other by sending messages/ documents/ images',
      features: 'sign/log in via email. Messages are saved in a database. Users can select and send emojis. Unread messages notification. Gradient background changing color',
      technologies: 'React | Firebase | HTML | CSS',
      challenges: 'applied Firebase API for instant messaging and storing data. Made the layout responsive (implemented with Grid, Flexbox)',
      video:'MxP0aQvJ0eg',
      mobile: chatMob,
    },
    { 
      name: 'notes app',
      url: 'https://todolist-beb72.web.app/',
      git: 'https://github.com/nataliaYarr/to-do-list',
      img: notesImg,
      description: 'App where users can save and alter notes real-time and add drawings from canvas',
      features: 'canvas (web and mobile) for creating notes. Categories and texts can be changed and stored real-time. Tasks\' filter. Responsive design implemented with Masonry.js and Flexbox.',
      technologies: 'Google/Git/Facebook Auth | Firebase | React | HTML | CSS',
      challenges: 'introduced authentication. Made canvas work on touch-screen devices. Made possible to edit and store tasks in a database' ,
      video:'asPq4ZmpJm8',
      mobile: notesMob,
     
    },
    {
      name: 'weather app',
      url: 'https://weather-wizard-74435.web.app/',
      git:'https://github.com/nataliaYarr/weather-app',
      img: weatherImg,
      description: 'Weather app with city pictures displayed on search',
      features: 'search for the city. A city picture is taken from Shutterstock. Responsive design.',
      technologies: 'Shutterstock API  | AccuWeather API | React | Firebase | HTML | CSS',
      challenges:'applied new APIs',
      video:'E4HxxayC6XU', 
      mobile: weatherMob
    },
    {
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
      name: 'Portfolio website',
      url: 'https://www.natayar.com/',
      git:'https://github.com/nataliaYarr/natty-yar',
      img: portfolioImg2,
      img2: portfolioImg,
      mobile: portfolioMob,
      description: 'Resporsive personal portfolio, mobile-first design',
      technologies: 'GSAP | Adobe Illustrator | React | JavaScript | HTML | CSS',
      challenges: 'used React hooks (useState, useEffect, useRef), GSAP animation, made images and layout responsive, created SVG images (Adobe Illustrator) and logo, used facades for better performance (YouTube embeded videos)'
    }
  ]

  return (
    <div className='projects-container' id='section-projects'>
      <h3 className='section-title'>Projects/</h3>
      {
        projectsArray.map((el, ind )=> {

          return (
            <div className='project-item' key={ind}>
              <ProjectItem 
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
import React, { useRef, useEffect } from 'react';
import './about.css';
import { highlightAboutFn } from '../service/animation.js';

const About = () => {
  const aboutSectionRef = useRef(null)

  useEffect(() => {
     highlightAboutFn()
  },[])
  
  return (
    <div id='section-about' className='about-container' ref={aboutSectionRef} >
      <h3 className='section-title'>about/</h3>
      <div className="text-about">
        <p> 
          <span className='highlight-scroll'>Hi, I'm Natalia. </span>
          <span className='highlight-scroll'>I'm a self-taught web developer. </span>
          <span className='highlight-scroll'>My main focus has mostly been on front-end web development. </span>
          <br/>
          <br/>
          <span className='highlight-scroll'>Some of the skills demonstrated in this 
          portfolio include CSS(Grid, Flexbox), JS, React. </span>
          <span className='highlight-scroll'>I love art and Adobe Illustrator. </span>
        </p>
      </div>
    </div>
  )
}

export default About
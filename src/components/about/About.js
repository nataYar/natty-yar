import React, { useRef, useEffect } from 'react';
import './about.css';
import { highlightAboutFn } from '../service/animation.js';

const About = () => {
  const aboutSectionRef = useRef(null)

  useEffect(() => {
     highlightAboutFn()
  }, [])
  
  return (
    <div id='section-about' className='about-container' ref={aboutSectionRef}>
    <h3 className='section-title'>about/</h3>
    <div className="text-about">
      <p>
        <span className='highlight-scroll'>Hi, I’m Natalia — a front-end developer based in Redondo Beach, CA. </span>
        <span className='highlight-scroll'>I build responsive, modern websites using tools like React, Tailwind, and JavaScript. </span>
        <br />
        <br />
        <span className='highlight-scroll'>I’ve helped startups and small businesses create clean, user-friendly sites that work well on any device. </span>
        <span className='highlight-scroll'>My background in tech support and education helps me communicate clearly and think from the user’s perspective. </span>
        <br />
        <br />
        <span className='highlight-scroll'>Looking for a simple site, something custom, or updates to an existing project? I’d love to help. </span>
      </p>
    </div>
  </div>
  
  )
}

export default About;
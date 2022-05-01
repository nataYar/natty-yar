import React, { useRef, useEffect } from 'react';
import './about.css';
import { gsap } from "gsap";

const About = () => {
  const aboutSectionRef = useRef(null)

  useEffect(() => {
      const tlAbout = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-container',
          start: "-60%",
          
        }
      });
      tlAbout.fromTo('.about-container h3',{y: '70px',}, { y: '0px', duration: .8, ease: "back.out(1.2)",});
      tlAbout.fromTo('.about-container h3', { opacity: 0 }, { opacity: 1, duration: .8 }, "<");

     // Highlight  fade in
      const tlHin = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-container",
          scrub: true,
          start: "-60%", 
          end: "20%",
        },
      });
      tlHin.fromTo(
        ".highlight-scroll",
        { color: "#000000" },
        { color: "#8276d1", stagger: 1, duration: .7 }
      );

      // Highlight fade out
      const tlHout = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-container",
          scrub: true,
          start: "-40%", 
          end: "40%",
        },
      });
      tlHout.to(
        ".highlight-scroll", { color: "#000000", stagger: 1, duration: .7 }
      );
  },[])

  return (
    <div id='about-container' className='about-container' ref={aboutSectionRef} >
      <h3 className='section-title'>about/</h3>
      <div className="text-about">
        <p> 
          <span className='highlight-scroll'>Hi, I'm Natalia. </span>
          <span className='highlight-scroll'>I'm a self-taught web developer. </span>
          <span className='highlight-scroll'>My main focus has mostly been on front-end web development. </span>
          <br/>
          <br/>
          <span className='highlight-scroll'>Some of the skills demonstrated in this 
          portfolio include CSS Grid, Flexbox, JS, React. </span>
          <span className='highlight-scroll'>I love art and Adobe Illustrator. </span>
        </p>
      </div>
    </div>
  )
}

export default About
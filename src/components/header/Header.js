import './header.css';
import React, { useRef , useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 


const Header = () => {
  const introRef = useRef(null);
  const introTextRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);
  const heroRef = useRef(null)
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
    tl.to('.text', { y: '0%', stagger: .1 , duration: .5});
    tl.to('.slider', { y: '-100%', stagger: .2, duration: .8, delay: .5 });
    tl.to(introRef.current, { y: '-100%', duration: 1 }, '<');
    tl.fromTo(nameRef.current, { opacity: 0 }, { opacity: 1, duration: .5 });
    tl.fromTo(infoRef.current, { opacity: 0 }, { opacity: 1, duration: .5 }, '<');
  },[])

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.header',
        start: "0%",
        end: "100%",
        scrub: true
      }
    });
    tl2.to(heroRef.current, { y:'50px', duration: 7 });
  },[])

  return (
  <div className='header'>
    <div className='intro' ref={introRef}>
      <div className='intro-text' ref={introTextRef}>
        <h1 className='hide'>
          <span className='text'>Welcome</span>
        </h1>
        <h1 className='hide'>
          <span className='text'>to my</span>
        </h1>
        <h1 className='hide'>
          <span className='text'>website</span>
        </h1>
      </div>
    </div>
    <div className='slider slider1'></div>
    <div className='slider slider2'></div> 

    <div className="header-container" ref={nameRef}>
      <h1 className="title">front end </h1>
      <h1 className="title">developer</h1>
      
      <div className="hero-container">
        <img ref={heroRef} alt='' />
      </div>

      <div className='name' >
        <h1>Natalia</h1>
        <h1>Yarysheva</h1>
      </div>
    </div>
    <div className='info-container' ref={infoRef}>
        <a href="" target="_blank">
          <div className='icon cv'/>  
        </a>
        <a href="https://www.w3schools.com" target="_blank" >
          <div className='icon in' />
        </a>
        <a href="https://github.com/nataliaYarr" target="_blank">
          <div className='icon git' />
        </a>
    </div>
  </div>
  )
}

export default Header
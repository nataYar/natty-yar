import React, { useRef , useEffect } from 'react';
import './header.css';
import { sliderFn, heroImgFn } from '../service/animation.js';


const Header = () => {
  const introRef = useRef(null);
  const introTextRef = useRef(null);
  const nameRef = useRef(null);
  const infoRef = useRef(null);
  const heroRef = useRef(null)
  
  // animating img and sliders on load
  useEffect(() => {
    sliderFn(introRef.current, nameRef.current, infoRef.current);
  },[])

  useEffect(() => {
    heroImgFn(heroRef.current);
  },[heroRef])

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
    <div className='slider-header slider1'></div>
    <div className='slider-header slider2'></div> 

    <div className="header-container" ref={nameRef}>
      <h1>front end </h1>
      <h1>developer</h1>
      
      <div className="hero-container">
        <img ref={heroRef} alt=''  />
      </div>

      <div className='name' >
        <h1>Natalia</h1>
        <h1>Yarysheva</h1>
      </div>
    </div>
    <div className='info-container' ref={infoRef}>
        <a href="https://www.linkedin.com/in/natalia-yarysheva/" target="_blank" rel="noreferrer" >
          <div className='icon in' />
        </a>
        <a href="https://github.com/nataYar/" target="_blank" rel="noreferrer">
          <div className='icon git' />
        </a>
       
    </div>
  </div>
  )
}

export default Header
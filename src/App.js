import React, { useState, useEffect }from 'react';
import './App.css';
import  { Nav, Header, About, Projects, Footer } from './components/service/imports';
import { sectionNameFn } from '../src/components/service/animation.js';

function App() {
  const [width, setWidth] = useState(null)
  const [tabletView, setTabletview] = useState(null);

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    window.innerWidth <= 991 ? setTabletview(true) : setTabletview(false)
  }, [width]) 
  
  useEffect(() => {
    sectionNameFn();
  }, [])

  return (
    <div className="App">
        <Nav tabletView={tabletView} />
        <Header tabletView={tabletView} windowWidth={width} />
        <About />
        <Projects tabletView={tabletView} width={width} />
        <Footer />
    </div>
  );
}

export default App;

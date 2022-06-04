import React, { useState, useEffect }from 'react';
import './App.css';
import  { Nav, Header, About, Projects, Footer } from './components/imports.js';
import { sectionNameFn } from '../src/components/animation.js';
import Cookies from 'js-cookie';

function App() {
  const [width, setWidth] = useState(null)
  const [tabletView, setTabletview] = useState(null);


  // Cookies.set('name', 'value', {})
  // document.cookie = "PREF=f4=4000000&tz=Asia.Shanghai&f6=40000000'; SameSite=None; Secure";
  Cookies.set('SID', 'KwjGuE7znBN-8-6aeh3ndqKUd8Zb-5diNQBwX8eVjAKw2fhic0aUXRnD7x6Dt65i0TjuvQ.', {  expires: 30,  sameSite: 'none', secure: true  });
  Cookies.set('PREF', 'f4=4000000&tz=Asia.Shanghai&f6=40000000', { domain: '.youtube.com/', expires: 30,  sameSite: 'none', secure: true  })
  // Cookies.set('PREF', 'f4=4000000&tz=Asia.Shanghai&f6=40000000', { expires: 30,  sameSite: 'none', secure: true  })
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
    sectionNameFn()
  }, [width])

  return (
    <div className="App">
        <Nav tabletView={tabletView}/>
        <Header tabletView={tabletView} windowWidth={width}/>
        <About />
        <Projects tabletView={tabletView} width={width}/>
        <Footer />
    </div>
  );
}

export default App;

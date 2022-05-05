import React, { useState, useEffect }from 'react';
import './App.css';
import  { Nav, Header, About, Projects, Footer } from './components/imports.js';
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

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
  

  return (
    <div className="App">
      {/* <Router>
        <Nav tabletView={tabletView}/>
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router> */}
        <Nav tabletView={tabletView}/>
        <Header tabletView={tabletView} windowWidth={width}/>
        <About />
        <Projects tabletView={tabletView} width={width}/>
        <Footer />
    </div>
  );
}

export default App;

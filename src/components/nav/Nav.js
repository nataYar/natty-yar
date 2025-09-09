import React, { useState } from 'react';
import './nav.css';

const Nav = ( { tabletView } ) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav>
      <div className='sticky-nav'>
        <div className={click && tabletView ? 'logo logo-beige' : 'logo logo-black'}></div>
        <div className={ click && tabletView ? 'burger clicked' : 'burger' }
        onClick={handleClick}>
          <span className='first'></span>
          <span className='second'></span>
          <span className='third'></span>
        </div>
      </div>

      <ul className={ click && tabletView  ? 'nav-wrapper active' : 'nav-wrapper' }>
        <li onClick={handleClick}>
          <a href="#section-about" className='nav-item nav-about'>
            About/
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#section-projects" className='nav-item nav-projects'>
            Projects/
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#section-footer" className='nav-item nav-footer'>
            Contact/
          </a>
        </li>
      </ul>
    </nav>
    
  )
}

export default Nav
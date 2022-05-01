import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = ( {tabletView} ) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav>
      <div className='sticky-nav'>
        <NavLink to='/home' className={click ? 'logo logo-beige' : 'logo logo-black'}>
        </NavLink>
        <div className={ click ? 'burger clicked' : 'burger' }
        onClick={handleClick}>
          <span className='first'></span>
          <span className='second'></span>
          <span className='third'></span>
        </div>
      </div>

      <ul className={ click ? 'nav-wrapper active' : 'nav-wrapper' }>
        <li>
          <NavLink to='/about' className='nav-item nav-about'>
            About/
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' className='nav-item nav-projects'>
            Projects/
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='nav-item nav-footer'>
            Contact/
          </NavLink>
        </li>
      </ul>
    </nav>
    
  )
}

export default Nav
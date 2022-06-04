import React from 'react';
import './footer.css';
import ContactForm from '../contactForm/ContactForm';
import { ThreeLeaf, SingleFlPink, Letter, Envelope, Fl3purpleStripes, TwigBrown, FlPink, FlYellow, Blob } from './svg/svgImports'

const Footer = () => {
  return (
    <div className='footer-container' id='section-footer'>
      <div className='section-title'>contact/</div>
        <ContactForm />
        <div className='svg-container'>
          <ThreeLeaf />
          <SingleFlPink />
          <FlYellow />
          <FlPink />
          <TwigBrown id="twigBrown1"/>
          <TwigBrown id="twigBrown2"/>
          <Fl3purpleStripes />
           <Letter />
          <Envelope />
          <Blob />
          {/* <svg 
            height="100%" 
            strokeMiterlimit="10" 
            style="fillRule:nonzero;clip-rule:evenodd;strokeLinecap:round;strokeLinejoin:round;" 
            version="1.1" 
            viewBox="0 0 502.489 505.202" 
            width="100%" 
            xmlns="http://www.w3.org/2000/svg" 
            >
            <defs/>
            <g id="Layer-1">
            <path d="M281.338 219.17C281.338 219.17 222.947 319.796 190.481 309.413C158.015 299.031 8.19353 257.711 15.3788 211.107C22.5641 164.503 450.593 2.07094 480.186 14.8366C484.066 19.1442 486.245 20.6843 490.357 26.0431C500.977 53.1541 327.254 488.548 293.3 489.819C255.936 491.218 216.858 365.66 216.858 365.66" fill="none" fillRule="evenodd" opacity="1" stroke="#898796" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"/>
            </g>
            </svg>  */}
        </div>
    </div>
  )
}

export default Footer;
import React from 'react';
import './footer.css';
import ContactForm from './contactForm/ContactForm';
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
        </div>
    </div>
  )
}

export default Footer;
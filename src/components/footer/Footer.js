import React from 'react';
import './footer.css';
import ContactForm from '../contactForm/ContactForm';

const Footer = () => {
  return (
    <div className='footer-container' id='section-footer'>
      <div className='section-title'>contact/</div>
      <p>Feel free to send an e-mail on hello@.com</p>
      <p>Or drop-in a mail here!</p>
        <ContactForm />
    </div>
    
  )
}

export default Footer;
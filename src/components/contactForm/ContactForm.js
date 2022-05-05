import React, {useRef} from 'react';
import './contactForm.css';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../constants.js';

const ContactForm = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
    <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='field'>
                <input id='name' type='text' name='name' required/>
                <label htmlFor="name">Name</label>
            </div>
            <div className='field'>
                <input id='email' type='email' name='email' required/>
                <label htmlFor='email'>Email</label>
            </div>
            <div className='field'>
                <textarea id='message' type='text' name='message' required></textarea>
                <label htmlFor='message'>Message</label>
            </div>
            <input type='submit' id='submit' />
        </form>
    </div>
    )
  }

  export default ContactForm
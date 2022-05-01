import React, {useRef} from 'react';
import './contactForm.css';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../constants.js';

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
    <div className='form'>
        <div className='form-title'>Say hi</div>
        <div className='inputs'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='field'>
                    <label htmlFor="name">Name:</label>
                    <input id='name' type='text' name='name' required/>
                </div>
                <div className='field'>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='email' name='email' required/>
                </div>
                <div className='field'>
                    <label htmlFor='message'>Message:</label>
                    {/* <textarea className="form-control" rows="5"></textarea> */}
                    <input id='message' type='text' name='message' required/>
                </div>
                <input type='submit' id='submit' />
            </form>
        </div>
    </div>
      
    )
  }

  export default ContactForm
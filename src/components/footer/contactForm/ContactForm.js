import React, {useState, useRef, useEffect} from 'react';
import './contactForm.css';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../service/constants';
import { flowerAnimationOne } from '../../service/animation';

const ContactForm = () => {
    const [inputName, setInputName] = useState(false);
    const [inputEmail, setInputEmail] = useState(false);
    const [inputMessage, setInputMessage] = useState(false);
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
        let imgs = document.querySelectorAll('.svg');
        imgs.forEach( (el) => {  el.classList.remove("stepThree") })
    }

    const detectName = (e) => { e.target.value.length > 0 ? setInputName(true) : setInputName(false) }

    const detectEmail = (e) => { e.target.value.length > 0 ? setInputEmail(true) : setInputEmail(false) }

    const detectMessage = (e) => { e.target.value.length > 0 ? setInputMessage(true) : setInputMessage(false) }

    useEffect(() => {
        flowerAnimationOne(inputName, inputEmail, inputMessage)
    })

    const copyFn = () => {
        const copyText =  document.querySelector('.email').innerHTML
        navigator.clipboard.writeText(copyText)
    }

    return (
        <div className='form-container'>
            <p>Feel free to send an e-mail on</p>
            
            <button className="email-button" type="button" data-hover="COPY">
                <span className='email' onClick={() => copyFn()}>n.yarysheva@gmail.com</span>
            </button>
            <p>or drop-in a mail here!</p>

            <form ref={form} onSubmit={sendEmail}>
                <div className='field'>
                    <input id='name' type='text' name='name' onChange={e => detectName(e)} required/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className='field'>
                    <input id='email' type='email' name='email' onChange={e => detectEmail(e)} required/>
                    <label htmlFor='email'>Email</label>
                </div>
                <div className='field'>
                    <textarea id='message' type='text' name='message' onChange={e => detectMessage(e)} required></textarea>
                    <label htmlFor='message'>Message</label>
                </div>
                <input type="submit"  id='submit' value='Send' />
            </form>
        </div>
    )
  }

  export default ContactForm
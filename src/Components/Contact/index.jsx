import { React, useRef, useState} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser'; //https://www.emailjs.com/docs/examples/reactjs/


const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ptmfuah', 'template_ayxkxnd', form.current, 'VriXUPj6wV9nhdg2M')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return(
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact</span>
                <div 
                    style={{background: '#ABF1FF94'}} 
                    className="blur c-blur1"
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name='user_message' className='user' placeholder='Message' />
                <input type="submit" value='Send' className='button' />
                <span>{ done && "Thanks for contactin me!"}</span>
                <div
                    style={{background: 'var(--purple)'}} 
                    className="blur c-blur"
                ></div>        
            </form>
        </div>
    </div>
  );
}


export default Contact;
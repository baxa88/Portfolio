import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiTelegramLine} from 'react-icons/ri';

import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_kuxfe9o','template_eetneyn',form.current,'4kEDLQF5nVK_MyADh')
       e.target.reset()
    }
    return (
        <section id='contact'>
           <h5>Get in Touch</h5>
           <h2>Contact Me</h2>

           <div className='container contact__container'>
               <div className='contact__options'>
                   <article className='contact__option'>
                       <MdOutlineEmail className='contact__option-icon'/>
                       <h4>Email</h4>
                       <h5>mamasolibaxromjon@gmail.com</h5>
                       <a href='https://mail.google.com/'>Serd a message</a>
                   </article>
                   <article className='contact__option'>
                       <RiTelegramLine className='contact__option-icon'/>
                       <h4>Messenger</h4>
                       <h5>@baxrom_88_55</h5>
                       <a href='#' >Serd a message</a>
                   </article>
                  
               </div>
               <form ref={form} onSubmit={sendEmail}>
                   <input type='text' name='name' placeholder='Your Name' required/>
                   <input type='email' name='email' placeholder='Your Email' required/>
                   <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                   <button type='submit' className='btn btn-primary'>Send Message</button>
               </form>
           </div>
        </section>
    );
};

export default Contact;
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = ({contactState,setContactState}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gafbr8q', 'template_9it207f', form.current, 'D_ePuw8mCjTLQPFZy')
            .then((result) => {
                setContactState('sent')
            }, (error) => {
                setContactState('error')
                console.log(error)
            });
    };

    return (
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-field">
                <label htmlFor="name" className='label'><p className='label-text'>Name:</p></label>
                <input type='name' name="name" id='name' placeholder="Name" required></input>
            </div>
            <div className="form-field">
                <label htmlFor="email" className='label'><p className='label-text'>E-Mail:</p></label>
                <input type='email' name="name" id='email' placeholder="E-Mail" required></input>
            </div>
            <div className="form-field">
                <label htmlFor="message" className='label'><p className='label-text'>Message:</p></label>
                <textarea id='message' name="message" placeholder="Leave a Message" required></textarea>
            </div>
            <button className='link-button' type="submit">Send</button>
        </form>
    )
}
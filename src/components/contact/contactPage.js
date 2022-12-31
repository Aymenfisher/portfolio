import React,{useState, useEffect} from "react";
import { ContactForm } from "./contactForm";
import {Error} from './error';
import {ThanksMessage} from './thanks';
import './contactPageStyles.css';


export const ContactPage = () => {
    const [contactState, setContactState] = useState('pending') // 'pending'  or 'sent' or 'error'

    const componentToRender = {
        pending:<ContactForm contactState={contactState} setContactState={setContactState}/>,
        sent:<ThanksMessage />,
        error: <Error/>
    }

    useEffect(() => {
        setContactState('pending')
    },[])

    return (
        <main className="contact-page">
            <h2 className="contact-title">Contact:</h2>
            <div className="contact-body">
                <p className="contact-text description">Thanks for your visit!<strong> I'm open to work, and ready to give a 100%.</strong> <br />
                    I'm looking for any opportunity where i can help with my efforts and develop my skills.<br />
                    You can contact me here , or by any social link listed at the bottom!
                </p>
                {
                    componentToRender[contactState]
                }
            </div>

        </main>
    )
}
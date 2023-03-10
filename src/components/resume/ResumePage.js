import React from "react";
import { Link } from "react-router-dom";
import './resumePageStyles.css'


export const ResumePage = () => {

    const resumeLink ={
        en:'https://drive.google.com/file/d/1979m7Nnhy8H4UUd4OjbHVK2GmfZCnsI2/view?usp=share_link',
        fr:'https://drive.google.com/file/d/1NKOqGd54Zz07VkcGHcVWK-9cmqsF9wxP/view?usp=share_link',
        drive:'https://drive.google.com/drive/folders/1tdgMI5f9ivNJ9yJkzOCa9raF9eHyHYCP?usp=sharing'
    }

    return (
        <main className="resume-page">
                <h2 className="resume-title">Resume:</h2>
                <p className="resume-description description">
                    Here are my Resume in both English and French languages.<br />
                    All my Certifications/Licences are attached on my <a style={{ color: 'steelblue' }} href='https://linkedin.com/in/aymen-boudabia' rel='noreferrer' target='_blank'>Linkedin Profile Here</a>.<br/>
                    I'm updating it consistantly since I'm always learning new Techs and developing my Skills 😁.
                </p>
                <div className="resume-links">
                    <a  href={resumeLink.en} rel='noreferrer' target='_blank'><button className="link-button" title='Download English Version'>English Version</button></a>
                    <a  href={resumeLink.fr} rel='noreferrer' target='_blank'><button className="link-button" title='Download Frensh Version'>French Version</button></a>
                </div>
                <p className="error-message">Problem with Links? <a style={{ color: 'steelblue' }} href={resumeLink.drive} rel='noreferrer' target='_blank'>Try Here</a>. Or <Link style={{ color: 'steelblue' }} to='/contact'>Contact me!</Link> </p>

        </main>
    )
}
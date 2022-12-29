import React from "react";
import { Link } from "react-router-dom";
import './resumePageStyles.css'


export const ResumePage = () => {

    const resumeLink ={
        en:'https://drive.google.com/file/d/1Kt6dIpGEGlTudDZ_LCTBSAObcl5UlCn2/view?usp=share_link',
        fr:'https://drive.google.com/file/d/1n1vshQwc3eXljYisYi5jLtcpvWKeE9SD/view?usp=share_link',
        drive:'https://drive.google.com/drive/folders/1tdgMI5f9ivNJ9yJkzOCa9raF9eHyHYCP?usp=sharing'
    }

    return (
        <main className="resume-page">
            <section className="resume">
                <h2 className="resume-title">Resume:</h2>
                <p className="resume-description">
                    Here are my Resume in both English and French languages.<br />
                    All my Certifications/Licences are attached on my <a style={{ color: 'steelblue' }} href='https://github.com/Aymenfisher?tab=repositories' rel='noreferrer' target='_blank'>Linkedin Profile Here</a>.<br/>
                    I'm updating it consistantly since I'm always learning new Techs and developing my Skills 😁.
                </p>
                <div className="resume-links">
                    <a  href={resumeLink.en} rel='noreferrer' target='_blank'><button className="link-button" title='Download English Version'>English Version</button></a>
                    <a  href={resumeLink.fr} rel='noreferrer' target='_blank'><button className="link-button" title='Download Frensh Version'>French Version</button></a>
                </div>
                <p className="error-message">Problem with Downloading? <a style={{ color: 'steelblue' }} href={resumeLink.drive} rel='noreferrer' target='_blank'>Try Here</a>. Or <Link style={{ color: 'steelblue' }} to='/contact'>Contact me!</Link> </p>

            </section>

        </main>
    )
}
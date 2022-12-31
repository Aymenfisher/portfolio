import React from "react";
import { Link } from 'react-router-dom';
import './homePageStyles.css';
import picture from '../../resources/aymen.png';
import { useSelector } from "react-redux";
import { selectTechs, selectOtherSkills } from "../../features/skills/skillsSlice";



export const HomePage = () => {
    const techSkills = Object.values(useSelector(selectTechs));
    const otherSkills = useSelector(selectOtherSkills);

    return (
        <main className="home-page">
            <section className="intro">
                <div className="intro-body">
                    <div className="intro-body-text description">
                        <p className="intro-body-title">Hi, I'm Aymen</p>
                        <p className="intro-body-content">A passionate Web Developer ,
                            and a lifelong learner who loves creating user-friendly websites and applications.</p>
                    </div>
                    <div className="links-buttons">
                        <Link to='/contact'><button className="link-button" title='contact'>Contact Me !</button></Link>
                        <Link to='/projects'><button className="link-button" title='projects'>Visit My Projects</button></Link>
                    </div>
                </div>
                <img className="personal-photo" src={picture} alt="Aymen"></img>
            </section>
            <section className="about info-container">
                <h2 className="about-title title">About Me</h2>
                <p className="about-body text-body description">
                    My name is Aymen Boudabia and I am a passionate and dedicated web developer. I specialize in Frontend Applications with <span className="highlighted">React</span>  and <span className="highlighted">Redux</span>, And some Backend with <span className="highlighted">Flask</span> and <span className="highlighted">SQLAlchemy ORM</span>. With 1 year of experience in the industry, I have honed my skills in building beautiful and functional websites.<br /><br />
                    I have a Master's Degree in Applied Physics. But my passion for the software engineering drives me to deeply learn web technologies, and my commitment leads me to build projects.<br /><br />
                    I am a <span className="highlighted">highly motivated and driven individual</span>, always striving to deliver top-quality work. I am excited to use my skills and expertise to help businesses and organizations bring their online presence to the next level.
                </p>
            </section>
            <section className="skills">
                <div className="technologies info-container">
                    <h2 className="technologies-title title">Technologies and Tools</h2>
                    <p className="technologies-text text-body description">
                        Here are a few technologies I've been working with
                    </p>
                    <div className="techs-items">
                        {
                            techSkills.map(skill => <img className="skill-logo icon" src={skill.logo} alt={skill.name + ' logo'} title={skill.name} key={skill.name} />)
                        }
                    </div>
                </div>

                <div className="other-skills info-container">
                    <h3 className="other-skill-title title">Others Skills</h3>
                    <p className="other-skills-text text-body">

                    </p>
                    <div className="other-skills-items">
                        {
                            otherSkills.map(skill => <span className="other-skill" key={skill}>{skill}</span>)
                        }
                    </div>
                </div>
            </section>
        </main >
    )
}
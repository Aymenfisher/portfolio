import React from "react";
import { Link } from 'react-router-dom';
import './homePageStyles.css';
import picture from '../../resources/aymen.png';
import { useSelector } from "react-redux";
import { selectTechs, selectOtherSkills } from "../../features/skills/skillsSlice";



export const HomePage = () => {
    const techSkills = Object.values(useSelector(selectTechs));
    const otherSkills = useSelector(selectOtherSkills) ;

    return (
        <main className="home-page">
            <section className="about">
                <div className="about-text">
                    <h2 className="about-title title">About Me:</h2>
                    <div className="about-body">
                        <p className="about-body-text">Hello! I'm Aymen, <span className="highlighted"> A self taught Web Developer</span>. I turn designs to real, responsive, and working websites with the latest technologies. <br/>
                        I have an experience of building <span className="highlighted">Frontend</span> Applications with <span className="highlighted">React</span> and <span className="highlighted">Redux</span>, And some <span className="highlighted">Backend</span>  with <span className="highlighted">Flask</span> and <span className="highlighted">SQLAlchemy ORM</span>.<br/>
                        I have a Master's Degree in Applied Physics, But my passion for the software engineering drives me to deeply learn web technologies, and my commitment leads me to build projects.<br/>
                        I'm a <em>Fast Learner</em>, <em>Highly Motivated </em> to work and develop my skills every single day!<br/>
                        Dealing with challenges and overcoming them is my joy. I'm looking for an opportunity where I can put my abilities to work, develop my skills and advance my career.
                        </p>
                        <div className="links-buttons">
                            <Link to='/contact'><button className="link-button" title='contact'>Contact Me !</button></Link>
                            <Link to='/projects'><button className="link-button" title='projects'>Visit My Projects</button></Link>
                        </div>
                    </div>

                </div>
                <img className="personal-photo" src={picture} alt="Aymen"></img>
            </section>
            <section className="skills">
                <h2 className="skills-title title">Skills:</h2>
                <div className="skills-body">
                    <div className="tech-skills">
                        <h3 className="skill-title">Technologies:</h3>
                        <div className="skill-body techs">
                            {
                                techSkills.map(skill => <img className="skill-logo icon" src={skill.logo} alt={skill.name + ' logo'} title={skill.name} key={skill.name} />)
                            }
                        </div>
                    </div>
                    <div className="other-skills">
                        <h3 className="skill-title">Others:</h3>
                        <div className="skill-body others">
                            {
                                otherSkills.map(skill => <span className="other-skill" key={skill}>{skill}</span>)
                            }
                        </div>
                    </div>
                </div>



            </section>
        </main>
    )
}
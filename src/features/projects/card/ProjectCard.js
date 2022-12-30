import React from 'react';
import { useSelector } from 'react-redux';
import { selectTechs } from '../../skills/skillsSlice';
import noPhoto from '../../../resources/no-photo.svg'
import './cardStyles.css'


export const ProjectCard = ({project}) => {
    const techsLogos = useSelector(selectTechs);

    return (
        <div className='card-container'>
            <div className='project-screenshot'><img className='screenshot' src={project.screenshot ? project.screenshot : noPhoto} alt='project screenshot' ></img></div>
            <div className='card-body'>
                <div className='card-title'>
                    <h3 className='project-title'>{project.title}</h3>
                    <div className='project-links'>
                        {project.githubLink ? <a href={project.githubLink} rel='noreferrer' target='_blank'><img className='project-link icon' src='https://svgshare.com/i/p54.svg' alt='Github Repo' title='Github Repo' /></a> :''}
                        {project.liveLink ? <a href={project.liveLink} rel='noreferrer' target='_blank'><img className='project-link icon' src='https://svgshare.com/i/p7a.svg' alt='Live link' title='Live link' /></a>: ''}
                    </div>
                </div>
                <div className='project-techs'>
                    {
                        project.techs.map(tech => <img className="skill-logo icon" src={techsLogos[tech.toLowerCase()].logo} alt={tech} title={tech} key={tech} />)
                    }
                </div>
                <p className='project-description'>
                    {project.description}
                </p>
            </div>
        </div>
    )
}
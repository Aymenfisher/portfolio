import React from 'react';
import { ProjectCard } from '../card/ProjectCard';
import { selectProjects } from '../projectsSlice';
import { useSelector } from 'react-redux';
import './projectsStyles.css'


export const ProjectsPage = () => {


    const projects = useSelector(selectProjects)

    return (
        <main className='projects'>
            <h2 className='projects-title'>Projects:</h2>
            <p className='projects-text '>
                Here you can find my projects with their live link preview and Github repositories.<br />
                I have worked in both Frontend and Backend sides. Implemented some projects from scartch, And completed parts of other projects.<br />
                You can visit my Github Repositories <a style={{ color: 'steelblue' }} href='https://github.com/Aymenfisher?tab=repositories' rel='noreferrer' target='_blank'>Here.</a>
            </p>
            <ul className='cards tech-projects'>
                {
                    projects.map(project => <li className='card' key={project.title}><ProjectCard  project={project} /></li> )
                }
            </ul>
        </main>
    )
}
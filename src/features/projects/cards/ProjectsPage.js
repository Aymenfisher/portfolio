import React from 'react';
import { ProjectCard } from '../card/ProjectCard';
import './projectsStyles.css'


export const ProjectsPage = () => {

    return (
        <main className='projects'>
            <h2 className='projects-title'>Projects:</h2>
            <p className='projects-text '>
                Here you can find my projects with their live link preview and Github repositories.<br />
                I have worked in both Frontend and Backend sides. Implemented some projects from scartch, And completed parts of other projects.<br />
                You can visit my Github Repositories <a style={{ color: 'steelblue' }} href='https://github.com/Aymenfisher?tab=repositories' rel='noreferrer' target='_blank'>Here.</a>
            </p>
            <ul className='cards tech-projects'>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
                <li className='card'><ProjectCard /></li>
            </ul>
        </main>
    )
}
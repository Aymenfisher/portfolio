import React from 'react';
import { ProjectCard } from '../card/ProjectCard';
import './projectsStyles.css'


export const ProjectsPage = () =>{

    return(
        <main className='projects'>
            <h2 className='projects-title'>Projects:</h2>
            <div className='tech-projects'>
                <ul className='cards'>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                    <li className='card'><ProjectCard/></li>
                </ul>
            </div>
        </main>
    )
}
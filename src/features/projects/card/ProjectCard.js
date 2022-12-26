import React from 'react';
import { useSelector } from 'react-redux';
import './cardStyles.css'
import { selectTechs } from '../../skills/skillsSlice';


export const ProjectCard = () =>{
    const techsLogos = useSelector(selectTechs);

    return(
        <div className='card-container'>
            <img className='project-screenshot' src='https://raw.githubusercontent.com/Aymenfisher/countries-app/master/src/design/desktop-design-detail-dark.jpg' alt='project screenshot' ></img>
            <div className='card-body'>
                <h2 className='project-title'>countries App</h2>
                <div className='project-techs'>
                    <img className="skill-logo icon" src={techsLogos[0].logo} alt={'html logo'} title={'html'} key='html' />
                    <img className="skill-logo icon" src={techsLogos[1].logo} alt={'css logo'} title={'css'} key='css' />
                    <img className="skill-logo icon" src={techsLogos[2].logo} alt={'js logo'} title={'js'} key='js' />
                </div>
                <p className='project-description'>
                    Countries App for showing all countries as cards with related informations, you can also navigate to each individual country to see more details about that country.
                </p>
            </div>
        </div>
    )
}
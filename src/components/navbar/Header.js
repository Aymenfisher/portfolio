import React, { useState, useEffect,useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import moonLogo from '../../resources/moon.svg';
import sunLogo from '../../resources/sun.svg';
import menuLight from '../../resources/menu-light.svg';
import menuDark from '../../resources/menu-dark.svg';
import './headerStyle.css';




export const Header = ({ theme, setTheme }) => {
    
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const [menuVisibility, setMenuVisibility] = useState('hidden') // menu visibility on mobile devices, could be 'visible' or 'hidden'

    const sideBarRef = useRef(null);

    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
        return
    }

    const handleToggleMenuVisibility = () => {
        menuVisibility === 'hidden' ? setMenuVisibility('visible') : setMenuVisibility('hidden')
        return
    }

    const handleWindowResize = (e) => {setWindowWidth(e.target.innerWidth)}



    useEffect(() => {  
        // track window size change and update state value

        window.addEventListener('resize',handleWindowResize)

        function handleClickOutside(event) { // traces if the event didnt happen on the ref then execute some code
            if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
                handleToggleMenuVisibility();
            }
        }
        // Bind the event listener
        if(menuVisibility ==='visible'){
            document.addEventListener("mousedown", handleClickOutside);
        }
        
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('resize', handleWindowResize)
        };
    }, [windowWidth,menuVisibility]);

    return (
        <header className="header">
            <h1 className="header-title"><Link to='/'>Aymen Boudabia</Link></h1>
            <div className="navigation-and-theme">
                <nav className={`header-navigation element ${menuVisibility}`} ref={sideBarRef}>
                    <ul className="navigations">
                        <li className="navigation">
                            <NavLink onClick={handleToggleMenuVisibility}  className='navlink' to='/home'><span className="navlink-title">Home</span></NavLink>
                        </li>
                        <li className="navigation">
                            <NavLink onClick={handleToggleMenuVisibility}  className='navlink' to='/projects'><span className="navlink-title">Projects</span></NavLink>
                        </li>
                        <li className="navigation">
                            <NavLink onClick={handleToggleMenuVisibility}  className='navlink' to='/resume'><span className="navlink-title">Resume</span></NavLink>
                        </li>
                        <li className="navigation">
                            <NavLink onClick={handleToggleMenuVisibility}  className='navlink' to='/contact'><span className="navlink-title">Contact</span></NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="theme-button" title="Toggle Theme" onClick={handleChangeTheme}><img alt='theme button' src={theme === 'dark' ? sunLogo : moonLogo}></img></button>
                <button onClick={handleToggleMenuVisibility} style={{ display: windowWidth < 1025 ? 'flex' : 'none' }} className="mobile-menu-button"><img alt='menu button' src={theme === 'dark' ? menuDark : menuLight}></img></button>
            </div>

        </header>
    )
}
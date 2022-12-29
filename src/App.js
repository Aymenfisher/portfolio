import React,{useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Header } from './components/navbar/Header.js';
import { Footer } from './components/footer/Footer.js';
import { HomePage } from './components/homePage/HomePage.js';
import { ProjectsPage } from './features/projects/cards/ProjectsPage.js';
import { ResumePage } from './components/resume/ResumePage.js';
import { ContactPage } from './components/contact/contactPage.js';


function App() {
  const [theme,setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/resume' element={<ResumePage/>}/>
        <Route path='/contact' element={<ContactPage theme={theme}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

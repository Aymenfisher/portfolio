import React,{useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Header } from './components/navbar/Header.js';
import { Footer } from './components/footer/Footer.js';
import { HomePage } from './components/homePage/HomePage.js';
import { ProjectsPage } from './features/projects/cards/ProjectsPage.js';
import { ResumePage } from './components/resume/ResumePage.js';



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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

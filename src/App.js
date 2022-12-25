import React,{useState} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Header } from './components/header/Header.js';


function App() {
  const [theme,setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>

      </Routes>
    </div>
  );
}

export default App;

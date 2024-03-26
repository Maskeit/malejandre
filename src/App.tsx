import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Sidebar} from './components/organismic/Sidebar';
import { MainPage } from './components/pages/MainPage'
import { Projects } from './components/pages/Projects'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact';
import { SidebarBtn } from './components/atomic/Buttons';
import { ScrollItem } from './components/atomic/Buttons'

export const App = () =>{
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <SidebarBtn toggleSidebar={toggleSidebar} isActive={isActive}/>
      <Sidebar isActive={isActive} toggleSidebar={toggleSidebar}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <div className='btn-scroll'>
        <ScrollItem/>
      </div>
    </>
  )
}

export default App
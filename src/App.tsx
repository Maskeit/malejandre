import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/organismic/Header'
import { MainPage } from './components/pages/MainPage'
import { Projects } from './components/pages/Projects'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact';

import { BackScroll, ScrollItem } from './components/atomic/Buttons'

export const App = () =>{

  return (
    <>
    <div className='header-component'>        
      <Header/>
    </div>
    
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

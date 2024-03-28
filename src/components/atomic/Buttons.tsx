import React, { useState, useEffect, useRef } from 'react';
import './styles/buttons.css'
export const Buttons = () => {
  return (
    <div>Buttons</div>
  )
}

export const BackScroll = () => {

  const scrollToTop = () =>{

    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto asegura que el scroll sea suave
    });
  }

  return(   
      <p className='smooth-back'  onClick={scrollToTop} > VOLVER</p>
  )
}

export const ScrollItem = () => {
  const [isVisible, setIsVisible] = useState(true);
  // Referencia al elemento de la línea
  const lineRef = useRef(null);

  // Añade el event listener cuando el componente se monta
  const handleScroll = () => {
    if (lineRef.current) {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;    
      const scrolled = window.scrollY; // cantidad de scroll actual
      // calcula el % de las paginas que ha sido desplazadas
      const scrollPercentage = (scrolled / (fullHeight - windowHeight)) * 100;

      const newHeight = Math.max(100 - scrollPercentage, 0);

      lineRef.current.style.height = `${newHeight}%`;
      setIsVisible(newHeight > 0);
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto asegura que el scroll sea suave
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="scroll-indicator" onClick={scrollToTop} style={{ cursor: isVisible ? 'default' : 'pointer' }}>
      <p>{isVisible ? 'SCROLL' : 'VOLVER'}</p>
      <div className="line" ref={lineRef}></div>
    </div>
  );
};

export const ContactButton = ({ btntext, bgColor }) => {
  return (
    <button className={`contact-btn ${bgColor}`}>
      {btntext}
    </button>
  );
};

export const SidebarBtn = ({ toggleSidebar, isActive }) => {
  if (isActive) return null; // No mostrar el botón si el sidebar está activo

  return (
    <button onClick={toggleSidebar} className='sidebar-menu'>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
  );
};

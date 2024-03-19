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
      const scrolled = window.scrollY;
      const newHeight = Math.max(100 - (scrolled / windowHeight) * 100, 0);

      lineRef.current.style.height = `${newHeight}px`;
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
import './styles/Project.css'
import { Image } from '../atomic/Images'
import { Parragraph, Titles } from '../atomic/Titles';
import { Projects } from '../../types/cv';
import { useState } from 'react';


export const Project = ({name, description, thumb, url } : Projects) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouch = (e: React.MouseEvent) => {
    // Evita que el click en el enlace afecte al contenedor
    if ((e.target as HTMLElement).tagName !== 'A') {
      setIsTouched(!isTouched); // Cambia el estado solo si no es un enlace
    }
  };
  return (
    <div 
    className={`project-content ${isTouched ? 'touched' : ''}`} 
    onClick={handleTouch} // Maneja clic/touch aquí
  >

    <div className='project-description'>
      <div className="project-title">
          <Titles text={name} color='' animation='' fontSize=''/>
      </div>
      <div className="project-paragraph">
          <Parragraph text={description} color='' animation='' fontSize=''/>
      </div>
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={thumb} addClass=""/>
    </a>
  </div>

  )
}

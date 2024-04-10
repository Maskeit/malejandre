import './styles/Project.css'
import { Image, Thumbnail } from '../atomic/Images'
import { Parragraph, Titles } from '../atomic/Titles';
import { Projects } from '../../types/cv';
import { useState } from 'react';


export const Project = ({name, description, url, src, thumb } : Projects) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouch = () => {
    setIsTouched(!isTouched); // Cambia el estado a cada clic/touch
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
    <Image src={thumb} addClass=""/>

  </div>

  )
}

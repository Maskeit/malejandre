import './styles/Projects.css'
import cv from '../../../cv.json'
import { Titles } from '../atomic/Titles';
import { Project } from '../layouts/Project';
import { Pointer, Blend} from 'lucide-react';

export const Proyectos = () => {
  return (
    <div className='projects'>
      <div className='titles-work'>
        <Titles text='My Professional Journey' fontSize='' color='main-color' animation='text-reveal'/>
      </div>
      <div className='pointer icon-container'>
        <Pointer />
        <p>Click on project</p>
      </div>
      <div className='hover-me icon-container'>
        <Blend />
        <p>Hover on project</p>
      </div>

      <div className='content'>
          {
            cv.projects.map((projectItem, index) => (
              <Project key={index} {...projectItem}/>
              ))
          }          
      </div>
      <div className='btn-container'>
        <a href="../Contact" className='project-btn-contact'>Contact me!</a>
      </div>

    </div>
  );
};
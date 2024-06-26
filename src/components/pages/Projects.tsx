import './styles/Projects.css'
import cv from '../../../cv.json'
import { Titles } from '../atomic/Titles';
import { Project } from '../layouts/Project';
import { Pointer, Blend} from 'lucide-react';
import { ContactMe } from '../atomic/Buttons';

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
      <ContactMe/>
    </div>
  );
};
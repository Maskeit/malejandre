import './styles/Projects.css'
import cv from '../../../cv.json'
import { Titles } from '../atomic/Titles';
import { Project } from '../layouts/Project';


export const Proyectos = () => {
  return (
    <div className='projects'>
      <div className='titles-work'>
        <Titles text='My Professional Journey' fontSize='fs-four-mid' color='main-color' animation='text-reveal'/>
      </div>
      <div className='content'>
          {
            cv.projects.map((projectItem, index) => (
              <Project key={index} {...projectItem}/>
              ))
          }
      </div>
    </div>
  );
};
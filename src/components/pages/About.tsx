import React from 'react'
import { Basics } from '../../types/cv'
import cv from "../../../cv.json";
import { Me } from '../layouts/Me'
import { Renders } from '../layouts/Renders'
import { Parragraph, TitlesH1 } from '../atomic/Titles'
import './styles/About.css'
export const About = () => {
  const blenderMode = cv.basics.blender;
  return (
    <div className='about'>
        <TitlesH1 text="About me" fontSize='fs-two-mid' vanished='vanished'/>
        <Me/>
        <Renders/>
        <Parragraph text={blenderMode}/>
    </div>
  )
}
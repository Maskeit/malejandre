import React from 'react';
import cv from "../../../cv.json"


import { Basics, Profile } from '../../types/cv';

import { SocialIcon } from '../atomic/Icons';
import './styles/sociallinks.css';

export const SocialLinks = () => {
  return (
    <div className='social'>
      {cv.basics.profiles.map((profile, index) => (
        <SocialIcon key={index} {...profile} />
      ))}
    </div>
  );
};

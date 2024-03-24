import React from 'react';
import cv from "../../../cv.json";
import { SocialIcon } from '../atomic/Icons';
import './styles/sociallinks.css';
export const SocialLinks = () => {
  return (
    <div className='social-icons'>
      {
        cv.basics.profiles.map((profileItem, index) => (
          <SocialIcon key={index} {...profileItem} />
        ))
      }
    </div>
  );
};

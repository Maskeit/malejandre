import React from 'react';
import githubIcon from '/src/icons/github.svg';
import linkedinIcon from '/src/icons/in.svg';
import gmailIcon from '/src/icons/gmail.svg';

import { SocialIcon } from '../atomic/Icons';
import './styles/sociallinks.css';

export const SocialLinks = () => {
  return (
    <div className='social'>
        <SocialIcon social={githubIcon}/>
        <SocialIcon social={linkedinIcon}/>
        <SocialIcon social={gmailIcon}/>
    </div>
  );
};

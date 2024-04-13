import React, { useState } from 'react';
import './styles/myhistorycard.css'
export const MyHistoryCard = ({src,text}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (    
    <div className={`image-container`}>
        {!imageLoaded && <div className="img-skeleton"></div>}
        <img 
         className={`card-image-history ${imageLoaded ? 'visible' : 'hidden'}`}
         src={src} alt=""  onLoad={()=> setImageLoaded(true)}/>
        <span
        className='text-overlay'
        onLoad={()=> setImageLoaded(true)}
        >{text}</span>
    </div>
  )
}

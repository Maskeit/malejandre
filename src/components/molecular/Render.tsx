import React from 'react'
import { Image } from '../atomic/Images'
import './styles/render.css'
export const Render = ({src}) => {
  return (
    <div className={`card-content`}>
        <Image src={src}/>
    </div>
  )
}

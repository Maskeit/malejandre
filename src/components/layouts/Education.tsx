import './styles/Education.css'
import { Titles, Parragraph } from '../atomic/Titles'
import { Image, Thumbnail } from '../atomic/Images'
import { Volunter } from '../../types/cv'
import cv from "../../../cv.json"
import miguel from  '../../assets/images/miguel-arbol.webp'
export const Education = () => {

    const educationDesc = cv.volunter.educationSummary;
  return (
    <div className='education'>
        <Thumbnail image={miguel} width='tresRem' addClass='blueShadow'animation=''/>
        <div className='education-info'>
            <Titles text="My education at school" fontSize='fs-one-mid' color="main-color" animation=''/>
            <Parragraph text={educationDesc} fontSize='fs-larger' animation='' color='main-color'/>     
        </div>
        
    </div>
  )
  
}

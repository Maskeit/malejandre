import './styles/Project.css'
import { Image, Thumbnail } from '../atomic/Images'
import { Parragraph, Titles } from '../atomic/Titles';
import { Projects } from '../../types/cv';

export const Project = ({name, description, url, src, thumb } : Projects) => {
  
  return (
    <div className='project-content'>
        <Image src={thumb} addClass="grayScale100"/>
        <Titles text={name} color='main-color' animation='' fontSize=''/>
        <Parragraph text={description} color='main-color' animation='' fontSize=''/>
    </div>
  )
}

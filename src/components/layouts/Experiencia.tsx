import { useEffect, useRef, useState } from 'react';
import cv from "../../../cv.json";
import { Titles,PrincipalTitles, Parragraph } from "../atomic/Titles";
import { ExperienciaCard } from "../molecular/ExperienciaCard";
import { Work, Skills, Volunter } from "../../types/cv";
import { LanguageIcon } from "../atomic/Icons";
import { Image } from "../atomic/Images";

import conf from "../../assets/conf1.webp";
import "./styles/experiencia.css";

const langDesc = cv.volunter.altSummary;
export const Experiencia = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef(null);

  useEffect(() =>{
    const observer = new IntersectionObserver(
      (entries) =>{
        const [entry] = entries;
        // si el elemento es observable y no hemos animado todavia
        if(entry.isIntersecting && !hasAnimated){
            setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    const Element = titleRef.current;
    if(Element){
      observer.observe(Element);
    }

    return() =>{
      if(Element){
        observer.unobserve(Element);
      }
    };
  },[hasAnimated])

  return (
    <div className="experiencia">
      <div className="experiencia-contenido">
      <Titles
        ref={titleRef}
        text="A little about what I have developed"
        fontSize="fs-one-mid"
        animation={hasAnimated ? 'vanished' : ''}
        color='main-color'
      />
        <div className={`cards-section ${hasAnimated ? 'reveal-object' : ''}`}>
          {cv.work.map((expItem: Work, index) => (
            <ExperienciaCard key={index} {...expItem} />
          ))}
        </div>

        <div className="technologies">
          <Parragraph
            text={langDesc}
            animation={`vanished`}
            fontSize=''
            color='main-color'
          />
          <div className="languages">
            {cv.skills.map((iconItem: Skills, index) => (
              <LanguageIcon key={index} {...iconItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
{/* <div className="more">
  <Image src={conf}/>
  <Parragraph text="Saber mas..." />
</div> */}

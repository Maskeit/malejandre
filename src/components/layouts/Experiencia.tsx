import React from "react";
import cv from "../../../cv.json";
import { TitlesH1, Parragraph } from "../atomic/Titles";
import { ExperienciaCard } from "../molecular/ExperienciaCard";
import { Work, Skills } from "../../types/cv";
import { LanguageIcon } from "../atomic/Icons";
import { Image } from "../atomic/Images";

import conf from "../../assets/conf1.webp";
import "./styles/experiencia.css";

export const Experiencia = () => {
  return (
    <div className="experiencia">
      <div className="experiencia-title">
        <TitlesH1 text="Un poco sobre mi trabajo" />
      </div>
      <div className="experiencia-contenido">

        <div className="cards-section">
          {cv.work.map((expItem: Work, index) => (
            <ExperienciaCard key={index} {...expItem} />
          ))}
        </div>

        <div className="technologies">
          <Parragraph text="Algunas tecnologias en las que me desempeño para realizar mis proyectos dedesarrollo de software, Machine Learning, desarrollo de aplicaciones tanto para moviles como web, diseño de interfaces y administracion de bases de datos." />
          <div className="languages">
            {cv.skills.map((iconItem: Skills, index) => (
              <LanguageIcon key={index} {...iconItem} />
            ))}
          </div>
        </div>

        <div className="conferencias">
          <div className="img-conf">
            <Image src={conf}/>
          </div>
            <Parragraph text="Adicionalmente, tambien doy conferencias sobre temas de tecnologia, compartiendo ideas y sobre todo el gusto por el desarrollo de software." />
        </div>

      </div>
    </div>
  );
};

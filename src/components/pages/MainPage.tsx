import React from "react";
import './styles/MainPage.css'

import { Hero } from "../layouts/Hero";
import { Experiencia } from "../layouts/Experiencia";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <Hero/>
      <Experiencia/>      
    </div>
  );
};
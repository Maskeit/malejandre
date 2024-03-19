import React from "react";
import './styles/MainPage.css'

import { Hero } from "../layouts/Hero";
import { Experiencia } from "../layouts/Experiencia";
import { SocialLinks } from "../molecular/SocialLinks";
export const MainPage = () => {
  return (
    <div className="MainPage">
      <Hero/>
      {/* <SocialLinks/> */}
      <Experiencia/>      
    </div>
  );
};
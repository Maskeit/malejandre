import React from "react";
import { Hero } from "../layouts/Hero";
import { Experiencia } from "../layouts/Experiencia";
import { SocialLinks } from "../molecular/SocialLinks";
export const MainPage = () => {
  return (
    <div>
      <Hero/>
      <SocialLinks/>
      <Experiencia/>      
    </div>
  );
};
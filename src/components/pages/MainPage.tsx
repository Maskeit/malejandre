import React from "react";
import './styles/MainPage.css'
import logo from '../../assets/Miguedev/2.svg'
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
import './styles/MainPage.css'
import { Hero } from "@/components/layouts/Hero";
import { Experiencia } from "@/components/layouts/Experiencia";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <Hero/>
      <Experiencia/> 
    </div>
  );
};
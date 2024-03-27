import { Render } from "../molecular/Render";
import { TitlesH1 } from "../atomic/Titles";
import "./styles/renders.css";
import render1 from "../../assets/renders/Render1.webp";
import render2 from "../../assets/renders/Render2.webp";
import render3 from "../../assets/renders/Render3.webp";
export const Renders = () => {
  return (
    <section className="renders">
        <div className="renders-title">
            <TitlesH1 text="Some of my render work" fontSize="fs-one-mid" vanished="vanished" />
        </div>
      <div>
        <Render src={render1} />
        <Render src={render2}  />
        <Render src={render3}  />
        <Render src={render1} />
        <Render src={render2}  />
        <Render src={render3}  />
      </div> 
    </section>
  );
};

import { Render } from "../molecular/Render";
import { Parragraph, Titles } from "../atomic/Titles";
import "./styles/renders.css";
import render1 from "../../assets/renders/Render1.webp";
import render2 from "../../assets/renders/Render2.webp";
import render3 from "../../assets/renders/Render3.webp";
import render4 from "../../assets/renders/Render4.webp";
import render5 from "../../assets/renders/Render5.webp";
import render6 from "../../assets/renders/Render6.webp";

export const Renders = () => {
  return (
    <section className="renders">
      <div>
        <Render src={render2}  />
        <Render src={render1} />
        <Render src={render3}  />
        <Render src={render4} />
        <Render src={render5}  />
        <Render src={render6}  />
      </div>
      <Parragraph text="More renders coming soon..." color="main-color" fontSize="fs-cero"/>
    </section>
  );
};

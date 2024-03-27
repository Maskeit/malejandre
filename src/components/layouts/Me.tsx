import React from "react";
import { TitlesH1, Parragraph, PrincipalTitles } from "../atomic/Titles";
import { Basics } from "../../types/cv";
import { Image, Thumbnail } from "../atomic/Images";
import bass from '../../assets/bass1.webp'
import charla from '../../assets/charla22.webp'
import charla2 from '../../assets/conf1.webp'
import yo from '../../assets/miguel.webp'

import { MyHistoryCard } from "../molecular/MyHistoryCard";

import avatar from "../../assets/miguel_04.png";

import "./styles/me.css";
export const Me = () => {
  //Information to show
  return (
    <>      
      <div className="me">
        <div className="image-avatar">
          <Image src={avatar} />
        </div>
        <div className="my-description">
          <span className="parrafos">            
            I am an experienced software engineer specialized in creating dynamic user
            interfaces using JavaScript, TypeScript, React js, HTML5, and CSS. My expertise
            extends beyond the front end; I also have solid skills in back-end
            technologies such as PHP, Java, Python, and Node.js, and I am
            experienced in working with both relational (MySQL) and
            non-relational (MongoDB) databases. I am well-versed in essential
            collaboration and version control tools like Git and GitHub.
          </span>
          <span className="parrafos">
            My curiosity and passion for technology have led me to specialize in
            the field of Natural Language Processing (NLP), where I have had the
            opportunity to train machine learning models applied to image
            recognition, thus broadening the scope of my technical knowledge.
          </span>
          <span className="parrafos">
            I am SCRUM certified, enabling me to efficiently implement agile
            methodologies in the projects I lead. I consider myself not just a
            technician but also a leader: I possess strong leadership skills,
            complemented by the ability to effectively communicate complex ideas
            to both technical teams and non-technical audiences.
          </span>
          <span className="parrafos">
            My commitment goes beyond developing software; I aim to create
            innovative and efficient solutions that meet the real needs of users
            and contribute to the success of the projects I head. This approach
            has allowed me not only to deliver high-quality software products
            but also to inspire my team to reach new technological horizons
            together.
          </span>
        </div>
      </div>

        <div className="mb-3">
          <TitlesH1 text="Talks and more" fontSize="fs-one-mid" vanished="vanished"/>
        </div>
      <section className="hobbies">
        <MyHistoryCard src={charla2} text="I have given talks about artificial intelligence to young people interested in technology."/>
        <MyHistoryCard src={charla} text="My passion for technology and innovation drives my daily improvement."/>
        <MyHistoryCard src={bass} text="Programming is not everything, music is also my passion and I have played bass for several years."/>
        
        {/* <MyHistoryCard src={yo} text="I like to work as a team to achieve better results, together we will reach the top"/> */}
      </section>

    </>
  );
};


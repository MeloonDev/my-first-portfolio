import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            lettersArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            index={15}
          />
        </h1>
        <p>
          I started my journey in 1990 Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Necessitatibus vitae ut nisi tenetur soluta
          reprehenderit sapiente nam veritatis laboriosam dolor quam ab fuga
          accusantium non, laudantium possimus, optio suscipit omnis.
        </p>
        <p>I think i'm god of programming</p>
        <p>Esports enjoyer</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>

          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

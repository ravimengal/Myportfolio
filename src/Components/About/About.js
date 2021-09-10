import React from "react";
import "./About.css";
import laptop from "../../images/laptop.svg";
import react from "../../images/react.png";
import html from "../../images/html.png";
import css from "../../images/css.svg";
import node from "../../images/node.png";
import mongo from "../../images/mongo.png";
import python from "../../images/python.png";
import sklearn from "../../images/sklearn.png";
import numpy from "../../images/numpy.png";
import keras from "../../images/keras.png";
import javascript from "../../images/javascript.jpg";
import language from "../../images/language.svg";
import { motion } from "framer-motion";

const continerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", delay: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", delay: 0.2 },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-div"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="about-title">hello 👋!! </div>
      <p>
        Hi, once again this is <b>Ravinder</b> I am 23 year old self-taught Web
        dev 💻 .
        <br /> I make cool projects when I am free and try to gather information
        related to tech, open source and astronomy.
        Explore my repositories to find out the projects that I've worked on, and feel free to check out the code
      </p>
      <div className="work-experience">
        <div className="work-title">
          <h2>Work Experience</h2>
          <img src={laptop} alt="laptop" />
        </div>
        <ul>
        
          <li>
            <p>I do some freelance work</p>
            <h3> Feb 2021-present</h3>
          </li>
        </ul>
      </div>
      <div className="tech-skills">
        <div className="tech-title">
          <h2>Current Tech Skills 🔧 </h2>
        </div>
        <div className="skills">
          <div className="skill">
            <img src={html} alt="html" />
          </div>
          <div className="skill">
            <img src={css} alt="css" />
          </div>
          <div className="skill">
            <img src={javascript} alt="javascript" />
          </div>
          <div className="skill">
            <img src={react} alt="react" />
          </div>

        
        
        </div>
      </div>
      
      <div className="tech-skills">
        <div className="tech-title">
          <h2>Things that I'll focus later on:🔧 </h2>
        </div>
        <div className="skills">
          <div className="skill">
            <img src={node} alt="node" />
          </div>
          <div className="skill">
            <img src={mongo} alt="mongo" />
          </div>
        </div>
        <div className="skills2">
          <div className="skill1">
            <img src={python} alt="python" />
          </div>
          <div className="skill1">
            <img src={sklearn} alt="sklearn" />
          </div>
          <div className="skill1">
            <img src={numpy} alt="numpy" />
          </div>
          <div className="skill1">
            <img src={keras} alt="keras" />
          </div>
        </div>
      </div>
      <div className="education">
        <div className="education-title">
          <h2>Education 📜 </h2>
        </div>
        <ul>
          <li>
            <p>Self-Learning </p>
            <h3>React.js , HTML , CSS , JAVASCRIPT</h3>
            <h3>Feb 2021-present</h3>
          </li>

          <li>
            <p>Bachelor's of Computer Science</p>
            <h3>NSC Science College</h3>
            <h3>July 2015-2018</h3>
          </li>
        </ul>
      </div>
      <div className="language">
        <div className="language-title">
          <h2>Languages </h2>
          <img src={language} alt="language" />
        </div>
        <ul>
          <li>
            <h3>
              Hindi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fluent
            </h3>
          </li>
          <li>
            <h3>Marathi &nbsp;&nbsp;&nbsp;&nbsp; Fluent </h3>
          </li>
          <li>
            <h3> English &nbsp;&nbsp;&nbsp;&nbsp; Fluent </h3>
          </li>
        </ul>
      </div>
      <div className="interests">
        <div className="interests-title">
          <h2>Interests 😊 </h2>
        </div>
        <ul>
          <li>
            <h2> Coding </h2>
            <p>
              I love coding so much as it helps regulate and maintain skills
              related to problem solving
              <br /> and also that Dopamine dose that we get after completing a
              project
            </p>
          </li>
          <li>
            <h2> Reading </h2>
            <p>
              I like to read books related to self-help, fiction,
              tech etc..
            </p>
          </li>
          <li>
            <h2> Playing Games </h2>
            <p>
              I like to play Moblie and Pc games like GTA PUBG and many more....            </p>
          </li>
          <li>
            <h2> Technology </h2>
            <p>
              Crucial part of my routine is to read / watch about new
              technologies and the old ones. I am always looking for latest tech things that makes coding easy and effective.<br /> 
             
              
            </p>
          </li>
          <li>
            <h2> Job Interest </h2>
            <p>
              If you wanna hire me I am willing to work with organizations that
              use modern stack like MERN.
              <br /> but i am still learning about the other ones
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;

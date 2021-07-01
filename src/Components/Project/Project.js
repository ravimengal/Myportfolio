import React from "react";
import "./Project.css";
import todo from "../../images/todo.png";
import weather from "../../images/weather.png";
import auth from "../../images/auth.png";
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

const Project = () => {
  return (
    <motion.div
      className="project-div"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Projects 🐱‍💻</h2>
      <div className="project-content">
        <div className="web-development">
          {/* <div className="web-header">Web-development</div> */}
          <div className="web-content">
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={todo} alt="ToDO-App" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://makemyworkeasy.netlify.app/login">
                 ToDo App 🔗
                </a>
              </div>
            </div>
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={weather} alt="iss-card" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://weathernearme.netlify.app/">
                  Weather App 🔗
                </a>
              </div>
            </div>
            <div className="web-card">
              <div className="card-img">
                <center>
                  <img src={auth} alt="covid-card" />
                </center>
              </div>
              <div className="card-title">
                <a href="https://reactauthentication.netlify.app/login">
                 Firebase Authentication  🔗
                </a>
              </div>
            </div>
            <center>
              <h1
                style={{
                  marginTop: "5%",
                }}
              >
                More to come ....
              </h1>
            </center>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

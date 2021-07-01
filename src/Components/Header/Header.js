import React from "react";
import { Link } from "react-router-dom";
import headerpic from "../../images/header.svg";
import "./Header.css";
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

const Header = () => {
  return (
    <motion.div
      className="home"
      variants={continerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
     <div></div>
        <div className="para-content">
         

        <img className="goku-gif" src={headerpic} alt="goku gif" />
      

        </div>
      
      
      <div>
        <div className="content">
          <p>
          <b>Hello, World!! 🌏 </b>
          <p>I'm Ravinder 👋</p>
          <p>I ❤️ &lt;/&gt; and watching Anime and playing Mobile Games </p>
         
           I design and code beautifully simple things, and I love what I do.&lt;/&gt;<br />
            and stuff living in India 🇮🇳.I like to work on cool and interesting projects that help me to grow as a better
            dev 🧑🏻‍💻.I write code to make websties look ✨ and to make websties 🦾.
      
            If you wanna colaborate on a project or Hire me or want to know
            about me or buy me a coffee ☕ 
            <br/>
            Got any questions? <Link  to="/contact"  className="Contact"> Contact Me</Link>
          </p>
        </div>
        <div className="separator"></div>
      </div>
    </motion.div>
  );
};

export default Header;

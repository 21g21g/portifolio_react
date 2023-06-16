import React from "react";
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="nav-all">
      <div className="main-page">
        <div className="words">
          <h1 style={{ color: "yellow" }}>Hi,My name is Gebeyehu</h1>
          <h4>A software developer with a passion for learning and creating</h4>
        </div>

        <div className="getway-methodes">
          <a href="#">
            <FaLinkedin className="icon" />
          </a>
          <a href="#">
            <FaYoutube className="icon" />
          </a>
          <a href="#">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="frontend">
          <h1>Frontend</h1>
          <p>ReactJs,Redux,Html,css,Flutter,BootStrap</p>
          <p>StyledComponents</p>
        </div>
        <div className="frontend">
          <h1>Backend</h1>
          <p>Nodejs,MongoDb,Expressjs,mySQL</p>
        </div>
        <div className="frontend">
          <h1>Languages</h1>
          <p>Javascript,java,c++,Python</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

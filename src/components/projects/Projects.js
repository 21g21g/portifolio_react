import React from "react";
import "./Projects.css";
import { HelperList } from "../helpers/HelperList";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {HelperList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

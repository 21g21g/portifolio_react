import React from "react";
import "./projectDisplay.css";
import { useParams } from "react-router-dom";
import { HelperList } from "../helpers/HelperList";
import { FaGithubSquare } from "react-icons/fa";

function ProjectDisplay() {
  const { id } = useParams();
  const project = HelperList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <FaGithubSquare />
    </div>
  );
}

export default ProjectDisplay;

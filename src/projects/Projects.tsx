import React from "react";
import s from "./Projects.module.scss";
import styleContainer from "./../common/styles/Container.module.css";
import ProjectItem from "./projectItem/ProjectItem";
import Title from "../components/Title/Title";
import social from "../assets/image/social.png"
import todoImg from "../assets/image/todoImg.png"

const socialImg = {
  backgroundImage: `url(${social})`,
  backgroundSize: 'cover'
};
const todoListImg = {
  backgroundImage: `url(${todoImg})`,
  backgroundSize: 'cover'
};

function Projects() {

  return (
    <div id='projects' className={s.projectsBlock}>
      <div className={`${styleContainer.container} ${s.projectsContainer}`}>
        <Title title={'My Projects'}/>
      
        <div className={s.projects}>
          <ProjectItem style={socialImg} title={'Social network'} description={' SPA with usage  React, Redux with Redux Thunk and RestAPI, React Hooks. For the layout of the sites were used Grid, Flexbox.'}/>
          <ProjectItem style={todoListImg } title={'Todo list'} description={' SPA with usage React, Redux with Redux Thunk and RestAPI, React Hooks, Material UI'}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
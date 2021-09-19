import React from "react"
import s from "./Projects.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import ProjectItem from "./projectItem/ProjectItem"
import Title from "../components/Title/Title"
import social from "../assets/image/social.png"
import todoImg from "../assets/image/todoImg.png"
import stepUp from "../assets/image/StepUp1.png"



function Projects() {

	const projects = [
		{
			title: "Step up",
			description:
				"Responsive website design using HTML, CSS, jQuery. For the layout of the sites were used Grid, Flexbox.",
			linkViewProject:
				"https://tanya0311.github.io/courseWebsiteDesign.github.io/",
			linkCode: "https://github.com/tanya0311/courseWebsiteDesign.github.io",
			image: {
				backgroundImage: `url(${stepUp})`,
				backgroundSize: "cover",
			},
		},
		{
			title: "Todo list",
			description:
				" SPA with usage React, Redux with Redux Thunk and RestAPI, React Hooks, Material UI",
			linkViewProject: "https://github.com/tanya0311/TodoList",
			linkCode: "https://github.com/tanya0311/TodoList",
			image: {
				backgroundImage: `url(${todoImg})`,
				backgroundSize: "cover",
			},
		},
		{
			title: "Social network",
			description:
				" SPA with usage  React, Redux with Redux Thunk and RestAPI, React Hooks. For the layout of the sites were used Grid, Flexbox.",
			linkViewProject: "https://github.com/tanya0311/social-network",
			linkCode: "https://github.com/tanya0311/social-network",
			image: {
				backgroundImage: `url(${social})`,
				backgroundSize: "cover",
			},
		},
	]

	return (
		<div id='projects' className={s.projectsBlock}>
			<div className={`${styleContainer.container} ${s.projectsContainer}`}>
				<Title title={"My Projects"} />

				<div className={s.projects}>
					{projects.map((el, index) => (
						<ProjectItem
							style={el.image}
							title={el.title}
							description={el.description}
							linkViewProject={el.linkViewProject}
							linkCode={el.linkCode}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects

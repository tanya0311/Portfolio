import React, { ReactElement } from "react"
import s from "./Skills.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import SkillItem from "./skillItem/SkillItem"
import Title from "../components/Title/Title"
import html from "../assets/iconsSkills/html-5.svg"
import otherFile from "../assets/iconsSkills/file.svg"
import js from "../assets/iconsSkills/js1.svg"
import react from "../assets/iconsSkills/react.svg"
import redux from "../assets/iconsSkills/redux.svg"



type SkillsType = {
	title: string
	imgLogo:  any

	skills: string[]
}

function Skills() {
	const skills: SkillsType[] = [
		{
			title: "HTML & CSS",
			imgLogo: <i style={{color: '#FF5722'}} className="fab fa-html5"></i>,
			skills: [
				"HTML5",
				"Css3",
				"SCSS",
				"Flexbox",
				"Grid",
				"Bootstrap",
				"Material UI",
				"Cross-browser compatibility",
				" ...",
			],
		},
		{
			title: "JavaScript & TypeScript",
			imgLogo: <i style={{color: '#eed81a'}} className="fab fa-js-square"></i>,
			skills: [
				"ES6",
				"Callbacks",
				"Promise",
				"Functional programming",
				" ...",
			],
		},

		{
			title: "React",
			imgLogo: <i style={{color: '#1a73e8'}} className="fab fa-react"></i>,
			skills: [
				"Functional components",
				"Class components",
				"HOC",
				"Hooks",
				"Promises",
				" ...",
			],
		},
		{
			title: "Redux",
			// imgLogo:redux,
			imgLogo:<i className="far fa-folder-open"></i>,
			skills: [
				"Redusers",
				"Action Creators",
				"Redux-thunk",
				"React-redux",
				"Middleware",
				"Redux-form",
				"Selectors",
				" ...",
			],
		},
		{
			title: "Other",
			// imgLogo:  otherFile,
			imgLogo: <i style={{color: '#76ae5e'}}  className="far fa-folder-open"></i>,
			
			skills: [
				"Test Driven Development",
				"Axios",
				"Storybook",
				"Snapshot Testing",
			],
		},
	]


	return (
		<div id='skills' className={s.skillsBlock}>
			<div className={`${styleContainer.container} ${s.skillsContainer}`}>
				<Title title={"Skills"} />
				<div className={s.skills}>
    
          {skills.map( (el, i)=><SkillItem key={i}
						title={el.title}
            icon={el.imgLogo}
						text={el.skills}
					/> )}
				</div>
			</div>
		</div>
	)
}

export default Skills

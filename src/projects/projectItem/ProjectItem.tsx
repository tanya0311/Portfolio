import React from "react"
import s from "./ProjectItem.module.scss"
type ProjectItemType = {
	title: string
	description: string
	projectHref?: string
	codeHref?: string
	style: { [key: string]: string }
	linkViewProject:string
  linkCode:string
}

function ProjectItem(props: ProjectItemType) {
	return (
		<div className={s.projectItem}>
			<div className={s.imgProject} style={props.style}>
				<a className={s.btnProject} href={props.linkViewProject} target='_blank'>
					View project
				</a>
				<a className={s.btnProject} href={props.linkCode} target='_blank'>
					View source code
				</a>
			</div>
			<div className={s.description}>
				<h3 className={s.projectItemTitle}>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	)
}

export default ProjectItem

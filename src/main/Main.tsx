import React from "react"
import s from "./Main.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import ReactTypingEffect from "react-typing-effect"
import Particles from "react-particles-js"
import { Fade } from "react-awesome-reveal"
import photo from "../assets/photo/photoMy.jpg"



const particlesOptions = {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 2000,
			},
		},
		size: {
			value: 3,
		},
	}
}
function Main() {
	return (
		<div id='main' className={s.mainBlock}>
			<Particles className={s.particles} params={particlesOptions} />
			
			<div className={`${styleContainer.container} ${s.mainContainer}`}>
				<Fade direction='down' >
					<div className={s.mainText}>
					<span>Hello</span>
					<h1>My name is Tanya</h1>
					<ReactTypingEffect
						className={s.spanJob}
						text="I'm Front-end Developer!"
					/>
				</div>
				</Fade >
				<Fade direction='up' >
				<div className={s.mainPhoto}>
					<img src={photo} alt='photo' />
				</div>
				</Fade >
			</div>
			
		</div>
	)
}

export default Main

import React from "react"
import s from "./Main.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import Particles from "react-tsparticles"
import ReactTypingEffect from 'react-typing-effect';

const particlesOptions = {
	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		size: {
			value: 3,
		},
	},
}

function Main() {
	return (
		<div id='main' className={s.mainBlock}>
			<Particles className={s.particles} params={particlesOptions} />
			<div className={styleContainer.container}>
				<div className={s.mainText}>
					<span>Hello</span>
					<h1>My name is Tanya</h1>
          <ReactTypingEffect className={s.spanJob} text="I'm frontend-developer!" />
				</div>

				<div className={s.mainPhoto}></div>
			</div>
		</div>
	)
}

export default Main

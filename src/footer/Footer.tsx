import React from "react"
import s from "./Footer.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import FooterIcon from "./footerIcon/FooterIcon"
import linkedinIcon from "../assets/icons/linkedin.svg"
import phoneIcon from "../assets/icons/smartphone.svg"
import telegramIcon from "../assets/icons//telegram.svg"

const icons = {
	linkedin: {
		backgroundImage: `url(${linkedinIcon})`,
	},
	phone: {
		backgroundImage: `url(${phoneIcon})`,
	},
	telegram: {
		backgroundImage: `url(${telegramIcon})`,
	},
}



function Footer() {

	return (
		<div className={s.footerBlock}>
			<div className={`${styleContainer.container} ${s.footerContainer}`}>
				<div className={s.footerIcons}>
					<a href='https://www.linkedin.com/in/tatsiana-shulzhytskay-14a54821b/'>
						<FooterIcon style={icons.linkedin} />
					</a>
					<a href={'tel:+375255026252'}>
						<FooterIcon style={icons.phone} />
					</a>
					<a href='https://t.me/tanya0390'>
						<FooterIcon style={icons.telegram} />
					</a>
				</div>
				<h4> Tatsiana Shulzhytskay</h4>
				<h5>@2021 All rights reserved</h5>
			</div>
		</div>
	)
}

export default Footer

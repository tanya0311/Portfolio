import { faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import s from "./BurgerNav.module.scss"

function BurgerNav() {
	let [menuIsOpen, setMenuIsOpen] = useState(false)

	const onBurgerBtnClick = () => {
		setMenuIsOpen(!menuIsOpen)
	}
	return (
		<div className={s.burgerNav}>

			<div className={menuIsOpen ? `${s.items} ${s.show}` : s.items}>
				<Link
					activeClass={s.active}
					to='main'
					spy={true}
					smooth={true}
					offset={1}
					duration={500}
				>
					Main
				</Link>
				<Link
					activeClass={s.active}
					to='skills'
					spy={true}
					smooth={true}
					offset={1}
					duration={500}
				>
					Skills
				</Link>
				<Link
					activeClass={s.active}
					to='projects'
					spy={true}
					smooth={true}
					offset={1}
					duration={500}
				>
					Projects
				</Link>
				<Link
					activeClass={s.active}
					to='contacts'
					spy={true}
					smooth={true}
					offset={1}
					duration={500}
				>
					Contacts
				</Link>
			</div>
			<div className={s.burgerBtn} onClick={onBurgerBtnClick}> <FontAwesomeIcon icon={faBars} className={s.icon} /></div>
		</div>
		
	)
}

export default BurgerNav

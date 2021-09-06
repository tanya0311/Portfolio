import React from "react"
import s from "./Contacts.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import Title from "../components/Title/Title"

function Contacts() {
	return (
		<div id='contacts' className={s.contactsBlock}>
			<div className={`${styleContainer.container} ${s.contactsContainer}`}>
				<Title title={"Contacts"} />
				<form className={s.contactForm}>
					<input
						className={s.contactFormInput}
						type='text'
						placeholder={"Name"}
					/>
					<input
						className={s.contactFormInput}
						type='text'
						placeholder={"Email"}
					/>
					<textarea
						className={s.contactFormInput}
						name=''
						placeholder={"Message"}
					></textarea>
				</form>
				<button className={s.submitBtn} type={"submit"}>
					Send
				</button>
			</div>
		</div>
	)
}

export default Contacts

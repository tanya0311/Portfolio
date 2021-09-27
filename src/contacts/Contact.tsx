import React from "react"
import s from "./Contacts.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import Title from "../components/Title/Title"
import { Fade } from "react-awesome-reveal"
import { useFormik } from "formik"
import axios from 'axios'

function Contacts() {


	type FormikValues = {
		email: string
		name: string
		message: string
  }
 
  const formik = useFormik<FormikValues>({
		initialValues: {
			 email: '',
			 name: '',
			 message: ''
		},
		
		onSubmit: values => {
			// alert(JSON.stringify(values) )
			let {name, email, message} = values

			axios.post('http://localhost:3010/sendMessage', {name, email, message})
			// axios.post('https://glacial-falls-34953.herokuapp.com/sendMessage', {name, email, message})
				 .then(() => {
					//  alert('hello')
					  formik.resetForm()
				 })
				
		}
  })


	return (
		<div id='contacts' className={s.contactsBlock}>
			<div className={`${styleContainer.container} ${s.contactsContainer}`}>
				<Title title={"Contacts"} />
				<Fade direction='up'>
					<form className={s.contactForm} onSubmit={formik.handleSubmit}>
						<input
							className={s.contactFormInput}
							type='text'
							placeholder={"Name"}
							{...formik.getFieldProps('name')}
						/>
						<input
							className={s.contactFormInput}
							type='text'
							placeholder={"Email"}
							{...formik.getFieldProps('email')}
						/>
						<textarea
							className={s.contactFormInput}
							placeholder={"Message"}
							{...formik.getFieldProps('message')}
						></textarea>

						<button className={s.submitBtn} type={"submit"}>
							Send
						</button>
					</form>
				</Fade>
			</div>
		</div>
	)
}

export default Contacts

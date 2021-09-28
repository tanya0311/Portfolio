import React from "react"
import s from "./Contacts.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import Title from "../components/Title/Title"
import { Fade } from "react-awesome-reveal"
import { useFormik } from "formik"
import axios from "axios"

type FormikValues = {
	email: string
	name: string
	message: string
}
type FormikError = {
	name?: string
	email?: string
	message?: string
}
function Contacts() {
	const validate = (values: FormikError) => {
		const errors: FormikError = {}
		if (!values.email) {
			errors.email = "This field is required"
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address"
		}

		if (!values.name) {
			errors.name = "This field is required"
		}

		if (!values.message) {
			errors.message = "This field is required"
		}
		return errors
	}

	const formik = useFormik<FormikValues>({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validate,
		onSubmit: (values) => {
			// alert(JSON.stringify(values) )
			let { name, email, message } = values

			// axios.post("http://localhost:3010/sendMessage", { name, email, message })
				// axios.post("https://glacial-falls-34953.herokuapp.com/sendMessage", {name, email, message})
				axios.post("https://gmail-nodes.herokuapp.com/sendmessage", {name, email, message},{
					withCredentials: true
				})
				.then(() => {
					//  alert('send')
					formik.resetForm()
				})
		},
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
							{...formik.getFieldProps("name")}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div style={{ color: "red", paddingLeft: "20px" }}>
								{formik.errors.name}
							</div>
						) : null}
						<input
							className={s.contactFormInput}
							type='text'
							placeholder={"Email"}
							{...formik.getFieldProps("email")}
						/>
						{formik.touched.name && formik.errors.email ? (
							<div style={{ color: "red", paddingLeft: "20px" }}>
								{formik.errors.email}
							</div>
						) : null}
						<textarea
							className={s.contactFormInput}
							placeholder={"Message"}
							{...formik.getFieldProps("message")}
						></textarea>
						{formik.touched.name && formik.errors.message ? (
							<div style={{ color: "red", paddingLeft: "20px" }}>
								{formik.errors.message}
							</div>
						) : null}
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

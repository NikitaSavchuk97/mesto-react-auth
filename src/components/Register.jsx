import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as auth from '../utils/auth.js'

function Register() {

	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')



	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleConfirmPasswordChange(e) {
		setConfirmPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (password === confirmPassword) {
			auth.registeration(password, email)
				.then((res) => {
					if (res) {
						navigate('/sign-in')
					} else {
						alert('Ошибка!')
					}
				})
		}
	}


	return (
		<form className="login" onSubmit={handleSubmit}>
			<h2 className="login__title">Регистрация</h2>
			<input
				onChange={handleEmailChange}
				className="login__input"
				type="email"
				placeholder="емейл"
			/>
			<input
				onChange={handlePasswordChange}
				className="login__input"
				type="password"
				placeholder="пароль"
			/>
			<input
				onChange={handleConfirmPasswordChange}
				className="login__input"
				type="password"
				placeholder="повторите пароль"
			/>
			<button className="login__submit" type="submit">Зарегистрироваться</button>
		</form >
	)
}

export default Register;
import { useState } from "react";

function Login() {
	return (
		<form className="login">
			<h2 className="login__title">Вход</h2>
			<input className="login__email" type="email" placeholder="email" />
			<input className="login__password" type="password" placeholder="password" />
			<button className="login__submit" type="submit">Войти</button>
		</form>
	)
}

export default Login
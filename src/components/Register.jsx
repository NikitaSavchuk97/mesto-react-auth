function Register() {
	return (
		<form className="login">
			<h2 className="login__title">Регистрация</h2>
			<input className="login__email" type="email" placeholder="email" />
			<input className="login__password" type="password" placeholder="password" />
			<button className="login__submit" type="submit">Зарегистрироваться</button>
		</form>
	)
}

export default Register
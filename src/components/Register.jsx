function Register() {
	return (
		<form className="login">
			<h2 className="login__title">Регистрация</h2>
			<input className="login__input" type="email" placeholder="емейл" />
			<input className="login__input" type="password" placeholder="пароль" />
			<input className="login__input" type="password" placeholder="повторите пароль" />
			<button className="login__submit" type="submit">Зарегистрироваться</button>
		</form>
	)
}

export default Register
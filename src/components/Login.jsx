function Login() {
	return (
		<form className="login">
			<h2 className="login__title">Вход</h2>
			<input className="login__input" type="email" placeholder="емейл" />
			<input className="login__input" type="password" placeholder="пароль" />
			<button className="login__submit" type="submit">Войти</button>
		</form>
	)
}

export default Login
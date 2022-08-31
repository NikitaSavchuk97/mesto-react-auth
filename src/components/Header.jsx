import { Link, useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();
	return (
		<header className="header">
			<div className="header__logo"></div>
			<Link
				to={
					location.pathname === "/sign-up" ?
						"/sign-in"
						:
						location.pathname === "/sign-in" ?
							"/sign-up"
							:
							"/sign-in"
				}
				className='header__login'
			>
				{
					location.pathname === "/sign-up"
						? "Войти"
						: location.pathname === "/sign-in"
							? "Регистрироваться"
							: "Выйти"
				}
			</Link>

		</header>
	);
}

export default Header;
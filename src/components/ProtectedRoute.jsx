import { Route, Redirect } from "react";

const ProtectedRoute = ({ component: Component, ...props }) => {
	return (
		<Route>
			{() =>
				props.loggedIn ? <Component {...props} /> : <Redirect to="/sing-in" />
			}
		</Route>
	);
};

export default ProtectedRoute;
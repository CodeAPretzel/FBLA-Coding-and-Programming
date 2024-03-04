import { AsyncDispatch } from "@/data/utils/redux";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ILoginUserPayload, IRegisterUserPayload } from "@/data/interfaces";
import { loginUserAsync, registerUserAsync } from "@/data/actions/user";
import { setActivePage } from "@/data/actions/navigation";
import { Pages } from "@/data/objects/state";
import "components/login/login.less";

export default function LoginPage() {
	const dispatch: AsyncDispatch = useDispatch();
	const [ showRegister, setShowRegister ] = useState(false);

	const changeCurrentPage = () => dispatch(setActivePage(Pages.HOME));
	const attemptLoginUser = (payload: ILoginUserPayload) => dispatch(loginUserAsync(payload));
	const attemptRegisterUser = (payload: IRegisterUserPayload) => dispatch(registerUserAsync(payload));

	const handleLoginUser = (event) => {
		event.preventDefault();

		// Note: using the ID param set for login action (not stored ; evaluating).
		const username = event?.target?.username?.value;
		const password = event?.target?.password?.value;

		attemptLoginUser({ username, password }).then(() => {
			changeCurrentPage();
		});
	};

	const handleRegisterUser = (event) => {
		event.preventDefault();

		// Note: using the ID param set for register action (storing).
		const username = event?.target?.username?.value;
		const password = event?.target?.password?.value;
		const email = event?.target?.email?.value;

		attemptRegisterUser({ username, password, email }).then(() => {
			changeCurrentPage();
		});
	};

	const renderLoginForm = () => {
		return (
			<Fragment>
				<h1>Login</h1>
				<form id="login-form" onSubmit={ handleLoginUser }>
					<input id="username" placeholder="Username" />
					<input id="password" type="password" placeholder="Password" />
					<button type="submit">Login</button>
				</form>
				<span>Don't have an account? <span onClick={ () => setShowRegister(true) }>Register</span></span>
			</Fragment>
		);
	}

	const renderRegisterForm = () => {
		return (
			<Fragment>
				<h1>Register</h1>
				<form id="login-form" onSubmit={ handleRegisterUser }>
					<input id="username" placeholder="Username" />
					<input id="email" placeholder="Email" />
					<input id="password" type="password" placeholder="Password" />
					<button type="submit">Register</button>
				</form>
				<span>Already have an account? <span onClick={ () => setShowRegister(false) }>Login</span></span>
			</Fragment>
		);
	}

	const renderContent = () => {
		if (showRegister) {
			return renderRegisterForm();
		}

		return renderLoginForm();
	}

	return (
		<div className="login-page">
			{ renderContent() }
		</div>
	);
}

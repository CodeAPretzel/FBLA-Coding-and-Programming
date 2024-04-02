import { AsyncDispatch } from "@/data/utils/redux";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { ILoginUserPayload, IRegisterUserPayload } from "@/data/interfaces";
import { loginUserAsync, registerUserAsync } from "@/data/actions/user";
import { setActivePage } from "@/data/actions/navigation";
import { Pages } from "@/data/objects/state";
import "components/login/login.less";

// Import logo items
import logoFrame from "src/assets/icons/connected-frame-logo.svg"
import logoWords from "src/assets/icons/connected-words-logo.svg"

export default function LoginPage() {
	const dispatch: AsyncDispatch = useDispatch();
	const [ showRegister, setShowRegister ] = useState(false);

	const changeCurrentPage = () => dispatch(setActivePage(Pages.HOME));
	const attemptLoginUser = (payload: ILoginUserPayload) => dispatch(loginUserAsync(payload));
	const attemptRegisterUser = (payload: IRegisterUserPayload) => dispatch(registerUserAsync(payload));

	const isValidEmail = (email) => {
		// Regular expression for basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleLoginUser = (event) => {
		event.preventDefault();

		// Note: using the ID param set for login action (not stored ; evaluating)
		const username = event?.target?.username?.value;
		const password = event?.target?.password?.value;

		attemptLoginUser({ username, password }).then(() => {
			changeCurrentPage();
		});
	};

	const handleRegisterUser = (event) => {
		event.preventDefault();

		// Note: using the ID param set for register action (storing)
		const username = event?.target?.username?.value;
		const password = event?.target?.password?.value;
		const email = event?.target?.email?.value;

		// Check if any of the fields are empty or invalid
		if (!username || !email || !password) {
			const errorMessage = document.getElementById("error-message");
			errorMessage.innerText = "Please fill in all fields.";
			errorMessage.style.display = "block";
			return;
		} else if (!isValidEmail(email)) {
			const errorMessage = document.getElementById("error-message");
			errorMessage.innerText = "Please enter a valid email address.";
			errorMessage.style.display = "block";
			return;
		} else {
			const errorMessage = document.getElementById("error-message");
			errorMessage.style.display = "none";
		}

		attemptRegisterUser({ username, password, email }).then(() => {
			setShowRegister(false);
		});
	};

	const renderLoginForm = () => {
		return (
			<Fragment>
				<div id="logo">
					<img src={logoWords} alt="Logo Words"/>
					<img id="logo-frame" src={logoFrame} alt="Logo Frame"/>
				</div>
				<h1>Login</h1>
				<form id="login-form" onSubmit={ handleLoginUser }>
					<input key="username" id="username" placeholder="Username" />
					<input key="password" id="password" type="password" placeholder="Password" />
					<button type="submit">Login</button>
				</form>
				<span>Don't have an account? <span onClick={ () => setShowRegister(true) }>Register</span></span>
			</Fragment>
		);
	}

	const renderRegisterForm = () => {
		return (
			<Fragment>
				<div id="logo">
					<img src={logoWords} alt="Logo Words"/>
					<img id="logo-frame" src={logoFrame} alt="Logo Frame"/>
				</div>
				<h1>Register</h1>
				<form id="login-form" onSubmit={ handleRegisterUser }>
					<input key="username" id="username" placeholder="Username" />
					<input id="email" placeholder="Email" />
					<input key="password" id="password" type="password" placeholder="Password" />
					<button type="submit">Register</button>
					<div id="error-message"></div>
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

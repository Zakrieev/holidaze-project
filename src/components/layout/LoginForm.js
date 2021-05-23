import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginError from "../common/LoginError";
import { ADMIN_DASHBOARD_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import AuthContext from "../../context/AuthContext";
import "../../sass/style.scss";


export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);
	const [identifier, setIndentifer] = useState("");
	const [identifierError, setIdentifierError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const history = useHistory();


	const [Auth, setAuth] = useContext(AuthContext);

	 const onSubmit = (e) => {
		 e.preventDefault();
		 if(!identifier) setIdentifierError("Please enter your username");
		 if(!password) setPasswordError("Please enter your password");
		setSubmitting(true);
		setLoginError(null);
		axios.post(ADMIN_DASHBOARD_URL, {identifier, password}).then((response) => {
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/admin");
		}).catch ((error) => {
			console.log("error", error);
			setLoginError(error.toString());
			setSubmitting(false);
		}) 
	
	}

	return (
		<>
			<div className="login-section ">
				<Heading title="Login to admin" />
				<form id="login-form" onSubmit={onSubmit}>
					{loginError && <LoginError>{loginError}</LoginError>}
					<fieldset disabled={submitting}>
						<div>
							<input id="login-style" name="username" placeholder="Username" onChange={(e) => setIndentifer(e.target.value)} />
							{identifierError && <LoginError>{identifierError}</LoginError>}
						</div>

						<div>
							<input name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
							{passwordError && <LoginError>{passwordError}</LoginError>}
						</div>
						<button onClick={(e) => console.log(e)} className="btn-login">{submitting ? "Loading" : "Login"}</button>
					</fieldset>
				</form>
			</div>
		</>
		
	);
}


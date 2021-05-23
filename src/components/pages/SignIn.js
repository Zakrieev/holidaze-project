import React from 'react';
import Footer from '../layout/Footer';
import LoginForm from '../layout/LoginForm';

function SignIn() {
	return (
		<div className="sign-page-wrapper">
			<LoginForm />
			<Footer />
		</div>
	)
}

export default SignIn;

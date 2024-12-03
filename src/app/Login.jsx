import { Link } from 'react-router';
import LoginForm from '../components/login/LoginForm';

function Login() {
	return (
		<div>
			<h2>Login in your account</h2>
			<LoginForm />
			<p>
				Need an account? <Link to="/register">Create account</Link>
			</p>
		</div>
	);
}

export { Login };

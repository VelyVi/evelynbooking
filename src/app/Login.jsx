import { Link } from 'react-router';
import LoginForm from '../components/auth/LoginForm';

function Login() {
	return (
		<div>
			<h1 className="text-lg font-semibold mb-6">Sign in with your account</h1>
			<LoginForm />
			<p className="mt-6">
				Need an account?{' '}
				<Link to="/register" className="text-blue-500 font-semibold">
					Create account
				</Link>
			</p>
		</div>
	);
}

export { Login };

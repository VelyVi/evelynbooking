import { Link } from 'react-router';
import Brand from './Brand';
import { useAuth } from '../app/context/auth';

function Header() {
	const { isAuth, logout } = useAuth();

	return (
		<div className="sticky top-0 bg-white h-20 w-full shadow-lg z-10">
			<div className="max-w-5xl mx-auto px-5 h-full flex items-center justify-between">
				<Brand />

				<div>
					{isAuth ? (
						<button className="btn bg-red-500" onClick={logout}>
							Logout
						</button>
					) : (
						<Link to="/login">Login</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;

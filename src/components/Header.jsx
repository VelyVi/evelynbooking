import { Link } from 'react-router';
import Brand from './Brand';

function Header() {
	return (
		<div className="sticky top-0 bg-white h-20 w-full shadow-lg z-10">
			<div className="max-w-5xl mx-auto px-5 h-full flex items-center justify-between">
				<Brand />

				<div>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;

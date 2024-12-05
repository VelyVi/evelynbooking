import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../app/context/auth';

function Protected({ children }) {
	const { isAuth } = useAuth();

	if (!isAuth) return <Navigate to="/login" />;
	return children ? children : <Outlet />;
}

export default Protected;

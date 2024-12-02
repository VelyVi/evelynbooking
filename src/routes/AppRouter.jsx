import { Routes, Route, Outlet } from 'react-router';
import { Details, Home, Login, Register, Reservations } from '../app';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/hotel/:id" element={<Details />} />
			<Route path="/reservations" element={<Reservations />} />

			<Route
				element={
					<div>
						<h2>AuthLayout</h2>
						<Outlet />
					</div>
				}
			>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;

import { Routes, Route, Outlet } from 'react-router';
import { Details, Home, Login, Register, Reservations } from '../app';
import MainLayout from '../layouts/MainLayout';
import AuthLayouts from '../layouts/AuthLayouts';
import Protected from './Protected';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/hotel/:id" element={<Details />} />
				<Route
					path="/reservations"
					element={
						<Protected>
							<Reservations />
						</Protected>
					}
				/>
			</Route>

			<Route element={<AuthLayouts />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;

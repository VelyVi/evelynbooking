import { create } from 'zustand';
import api from '../services/api';

const ls = window.localStorage;

export const useAuth = create((set) => ({
	user: JSON.parse(ls.getItem('user')) || null,
	token: ls.getItem('token') || null,
	isAuth: Boolean(ls.getItem('token')),
	status: 'idle', // No se ha iniciado ninguna peticion o solicitud
	error: null,

	login: async ({ email, password }) => {
		set({ status: 'pending' }); // Esta en proceso...
		try {
			const res = await api.post('users/login', { email, password });
			const { user, token } = res.data;

			ls.setItem('token', token);
			ls.setItem('user', JSON.stringify(user));

			set({
				user,
				token,
				isAuth: true,
				status: 'resolved', //Se completo exitosamente
				error: null,
			});
		} catch (error) {
			set({
				status: 'rejected', // Se rechazo
				error: error?.response?.data?.message || error.message,
			});
		}
	},
	register: async ({ firstName, lastName, email, password, gender }) => {
		set({ status: 'pending' });
		try {
			await api.post('users', { firstName, lastName, email, password, gender });
			set({
				status: 'resolved',
				error: null,
			});
		} catch (error) {
			set({
				status: 'rejected', // Se rechazo
				error: error?.response?.data?.message || error.message,
			});
		}
	},

	logout: () => {
		ls.removeItem('token');
		ls.removeItem('user');

		set({
			user: null,
			token: null,
			isAuth: false,
			status: 'idle',
			error: null,
		});
	},
}));

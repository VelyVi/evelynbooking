import { create } from 'zustand';
import api from '../services/api';

const useHotels = create((set) => {
	return {
		hotels: JSON.parse(localStorage.getItem('hotels')) || [],
		loading: false,
		error: null,

		getAll: async () => {
			set({ loading: true });
			try {
				const res = await api.get('/hotels');
				localStorage.setItem('hotels', JSON.stringify(res.data));
				set({ hotels: res.data });
			} catch (error) {
				set({ error: error.message });
			} finally {
				set({ loading: false });
			}
		},
		getByCity: async (cityId) => {
			set({ loading: true });
			try {
				const res = await api.get(
					`/hotels${cityId ? `?cityId=${cityId}` : ''}`,
				);
				set({ hotels: res.data });
			} catch (error) {
				set({ error: error.message });
			} finally {
				set({ loading: false });
			}
		},
	};
});

export { useHotels };

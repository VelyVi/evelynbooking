import axios from 'axios';

const api = axios.create({
	baseURL: 'https://hotels-api.academlo.tech',
});

export default api;

import axios from 'axios';

const ls = window.localStorage
const api = axios.create({
	baseURL: 'https://hotels-api.academlo.tech',
});

api.interceptors.request.use(
(config)=>{
const token = ls.getItem('token')
if(token)config.headers.Authorization = `Bearer ${token}`
return config
},
(error)=>Promise.reject)

export default api;

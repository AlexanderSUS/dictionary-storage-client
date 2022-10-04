import axios from 'axios';
import { API_URL, TOKEN } from 'const/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => ({
  ...config,
  headers: { ...config.headers, Authorization: `Bearer ${localStorage.getItem(TOKEN)}` },

}));

export default api;

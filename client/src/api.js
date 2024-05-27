import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Reemplaza con la URL de tu backend
  withCredentials: true, // Para permitir que las cookies se envíen en las solicitudes CORS
});

// Interceptar solicitudes para incluir el token de autenticación
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Nuevas funciones para autenticación
export const login = async (email, password) => {
    return await api.post('/auth/login', { email, password });
};

export const register = async (username, email, password) => {
    return await api.post('/auth/register', { username, email, password });
};

export const refreshToken = async () => {
    return await api.post('/auth/refresh-token');
};

export const logout = async () => {
    return await api.post('/auth/logout');
};

export default api;

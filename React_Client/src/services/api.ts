import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios, { AxiosHeaders } from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try {
      const token =
        typeof window !== 'undefined'
          ? localStorage.getItem('access_token')
          : null;

      const headers = new AxiosHeaders(config.headers);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      headers.set('X-Request-Id', Date.now().toString());
      config.headers = headers;
    } catch (error: unknown) {
      console.error('Interceptors Error -> ', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

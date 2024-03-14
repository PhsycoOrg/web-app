import axios, { type AxiosInstance } from 'axios';
import { useUserStore } from '@/stores/User';

// const defaultUrl: string = "http://gyofood.test/api/qr-menu/v1";
const defaultUrl: string = "https://app.myrest.pe/api/qr-menu/v1";

const api: AxiosInstance = axios.create({
  baseURL: defaultUrl,
});

api.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token: string | null = userStore.getToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';

  return config;
}, (error) => Promise.reject(error));

export default api;
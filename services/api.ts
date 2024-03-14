import axios, { type AxiosInstance } from 'axios';
import { useUserStore } from '@/stores/User';

const defaultUrl: string = process.env.NUXT_PUBLIC_API_BASE_URL??'';

const apiAxios: AxiosInstance = axios.create({
  baseURL: defaultUrl,
});

apiAxios.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token: string | null = userStore.getToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';

  return config;
}, (error) => Promise.reject(error));

export default apiAxios;
import axios, { AxiosError, type AxiosInstance } from 'axios';
import { useUserStore } from '@/stores/User';
import ApiError from '@/models/ApiError';

const defaultUrl: string = 'http://localhost:8000/api/v1';
const VALIDATION_ERROR_STATUS = 422;
const UNAUTHENTICATED_ERROR_STATUS = 401;

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
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, (error) => Promise.reject(error));

apiAxios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    const userStore = useUserStore();
    if (error.response?.status === VALIDATION_ERROR_STATUS) {
        throw new ApiError(error.response.data);
    }

    if (error.response?.status === UNAUTHENTICATED_ERROR_STATUS) {
      userStore.logout();
      navigateTo('/login');
    }

    return Promise.reject(error);
  }
);


export default apiAxios;
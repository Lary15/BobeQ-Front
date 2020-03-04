import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const url = 'http://192.168.0.15:3000';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        config.headers.Authorization = JSON.parse(user).token;
      }
      return config;
    } catch (e) {
      console.log(e);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;

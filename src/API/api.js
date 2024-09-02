import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Authorization': `Bearer ${config.apiKey}`,
  },
});

export default api;
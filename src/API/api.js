import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Authorization': `Bearer ${config.apiKey}`,
    'Access-Control-Allow-Origin': '*',
    'User-Agent': 'My_News_Web_/1.0'
  },
});

export default api;
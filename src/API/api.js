import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Authorization': `Bearer 5ae5b03f3b09491cb41c58b5a9bcf0ce`,
    'Access-Control-Allow-Origin': '*',
    'User-Agent': 'My_News_Web_/1.0',
    'x-content-type-options': 'nosniff',
    'Cache-Control': 'max-age=31536000',
    'Upgrade': 'h2c' // added this header to upgrade to HTTP/2
  },
});

export default api;
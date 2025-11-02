import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000' || 'https://auction-platform-1asl.onrender.com',
  withCredentials: true
});

export default api;
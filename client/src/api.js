 
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taxi-booking-backend-muup.onrender.com',
});

export default API;


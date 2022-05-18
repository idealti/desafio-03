import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
   baseURL: 'https://fakestoreapi.com'
})

export default api;
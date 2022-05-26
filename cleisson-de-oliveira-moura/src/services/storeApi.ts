import axios, { AxiosInstance } from 'axios';

const storeApi: AxiosInstance = axios.create({
   baseURL: 'https://fakestoreapi.com'
})

export default storeApi;
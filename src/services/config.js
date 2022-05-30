import axios from 'axios'

export const url = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})
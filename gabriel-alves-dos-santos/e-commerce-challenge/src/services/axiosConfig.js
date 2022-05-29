import axios from 'axios'

const fetchData = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export default fetchData
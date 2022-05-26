import axios from 'axios'

const loadAllProducts = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})

export default loadAllProducts

//Arquivo para consumo da API utilizando o axios
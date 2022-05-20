import axios from 'axios'
import CustomRequestException from '../exceptions/CustomRequestException'

const httpClient = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

class ConfigService {
    
    constructor(apiurl){
        this.apiurl = apiurl;
    }

    async post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        try{
            return await httpClient.post(requestUrl, objeto)
        }catch(error){
            throw new CustomRequestException(error)
        }
    }

    async patch(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        try{
            return await httpClient.patch(requestUrl, objeto)
        }catch(error){
            throw new CustomRequestException(error)
        }
    }

    async put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        try{
            return await httpClient.put(requestUrl, objeto)
        }catch(error){
            throw new CustomRequestException(error)
        }
    }

    async delete(url){
        const requestUrl = `${this.apiurl}${url}`
        try{
            return await httpClient.delete(requestUrl)
        }catch(error){
            throw new CustomRequestException(error)
        }
    }

    async get(url, params){
        const requestUrl = `${this.apiurl}${url}`
        try{
            return await httpClient.get(requestUrl, params)
        }catch(error){
            throw new CustomRequestException(error)
        }
    }
}

export default ConfigService
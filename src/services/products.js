import { url } from "./config";

export default {
    list:() => {
        return url.get('products')
    }
}
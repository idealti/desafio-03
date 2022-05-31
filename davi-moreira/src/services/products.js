import { http } from './config'

export default {
  list: () => {
    return http.get('products')
  }
}

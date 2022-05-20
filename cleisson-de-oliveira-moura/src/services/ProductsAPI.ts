import api from "./api";

export default {
   getProducts(category: string) {
      if (category === "all") {
         return api.get('/products', {
            headers: {
               'content-type' : 'application/json',
               'accept':'application/json'
            }
         })
      } else {
         return api.get(`/products/category/${category}`, {
            headers: {
               'content-type' : 'application/json',
               'accept':'application/json'
            }
         })
      }
   },
   getCategories(){
      return api.get('/products/categories')
   }
}
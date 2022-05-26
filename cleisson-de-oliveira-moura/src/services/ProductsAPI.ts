import storeApi from "./storeApi";

export default {
   getProducts(category: string) {
      if (category === "all") {
         return storeApi.get('/products', {
            headers: {
               'content-type' : 'application/json',
               'accept':'application/json'
            }
         })
      } else {
         return storeApi.get(`/products/category/${category}`, {
            headers: {
               'content-type' : 'application/json',
               'accept':'application/json'
            }
         })
      }
   },
   getProduct(productId: string | string[]) {
      return storeApi.get(`/products/${productId}`, {
         headers: {
            'content-type' : 'application/json',
            'accept':'application/json'
         }
      })
   },
   getCategories(){
      return storeApi.get('/products/categories')
   }
}
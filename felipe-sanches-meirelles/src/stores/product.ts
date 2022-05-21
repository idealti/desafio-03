import { defineStore } from 'pinia';

export type Product = {data:{id: number, price: number}, quantity: number};

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    selectedProduct: {} as Product,
    cart: [] as Product[],
    price: 0
  }),
  getters: {
    getCart(state): Product[] {
      return state.cart;
    },
    getPrice(state): number {
      return state.price;
    }
  },
  actions: {
    insertSelectedProduct(obj: Product) {
      this.selectedProduct = obj
    },
    addToCart(obj: never) {
      this.cart = [...this.cart, obj]
    },
    removeToCart(obj: Product) {
      this.cart = this.cart.filter((i) => i.data.id !== obj.data.id);
    },
    updatePrice() {
      if(this.cart.length === 0) {
        this.price = 0
      } else {
        this.price = this.cart.map(i => Number(i.data.price) * Number(i.quantity)).reduce((p, c) => p + c, 0)
      }
    },
    insertMoreQuantity(obj: Product) {
      const index = this.cart.findIndex(i => i.data.id === obj.data.id);
      this.cart[index].quantity = this.cart[index].quantity + 1
    },
    insertLessQuantity(obj: Product) {
      const index = this.cart.findIndex(i => i.data.id === obj.data.id);
      if(this.cart[index].quantity === 1) {
        this.removeToCart(this.cart[index]);
      } else {
        this.cart[index].quantity = this.cart[index].quantity - 1
      }
    }
  }
})

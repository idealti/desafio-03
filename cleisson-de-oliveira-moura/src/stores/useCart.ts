import { defineStore } from "pinia";
import { computed, ref } from "vue";
import api from "../services/api";
import { Product } from '../types';

export const useCart = defineStore('cart', () => {
   const cart = ref<Product[]>([]);
   cart.value = JSON.parse(localStorage.getItem('cart') || '[]');
   
   const addProduct = async (productId: number) => {
      const newCart = [...cart.value];
      const productOnCart = newCart.find(product => product.id === productId);

      const currentAmount = productOnCart ? productOnCart.amount : 0;
      const amount = currentAmount + 1;

      if(productOnCart) {
         productOnCart.amount = amount;
      } else {
         const product = await api.get<Product>(`/products/${productId}`);
         newCart.push({ ...product.data, amount: 1 });
      }

      cart.value = newCart;
      localStorage.setItem('cart', JSON.stringify(newCart));
   };

   return {
      cart,
      addProduct
   }
});
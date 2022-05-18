import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../services/api";
import { Product, UpdateProductAmountProps } from '../types';

export const useCart = defineStore('cart', () => {
   const cart = ref<Product[]>([]);
   cart.value = JSON.parse(localStorage.getItem('cart') as string) || [];
   
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

   const removeProduct = async (productId: number) => {
      const newCart = [...cart.value];

      const productIndex = newCart.findIndex(product => product.id === productId);
      if(productIndex >= 0) {
         newCart.splice(productIndex, 1);

         cart.value = newCart;
         localStorage.setItem('cart', JSON.stringify(newCart));
      } else {
         throw new Error();   
      }
   };

   const updateProductAmount = async ({
      productId,
      amount
   }: UpdateProductAmountProps) => {
      if (amount <= 0) return

      const newCart = [...cart.value];
      const productOnCart = newCart.find(product => product.id === productId);

      if (productOnCart) {
         productOnCart.amount = amount;
         cart.value = newCart;
         localStorage.setItem('cart', JSON.stringify(newCart));
       }
   };

   return {
      cart,
      addProduct,
      removeProduct,
      updateProductAmount
   }
}, {
   persist: true
});
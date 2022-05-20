import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { Product, UpdateProductAmountProps } from '../utilities/types';

export const useCart = defineStore('cart',() => {
   const cart = ref(
      useLocalStorage('cart', [] as Product[])
   );

   const addProduct = (productSelected: Product) => {
      const newCart = [...cart.value];
      const productOnCart = newCart.find(product => product.id === productSelected.id);

      const currentAmount = productOnCart ? productOnCart.amount : 0;
      const amount = currentAmount + 1;

      if(productOnCart) {
         productOnCart.amount = amount;
      } else {
         newCart.push({ ...productSelected, amount: 1 });
      }
      
      localStorage.setItem('cart', JSON.stringify(newCart));
      cart.value = newCart;
   }
   const removeProduct = (productId: number) => {
      const newCart = [...cart.value];

      const productIndex = newCart.findIndex(product => product.id === productId);
      if(productIndex >= 0) {
         newCart.splice(productIndex, 1);

         cart.value = newCart;
         localStorage.setItem('cart', JSON.stringify(newCart));
      } else {
         throw new Error();   
      }
   }
   const updateProductAmount = ({
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
   }
   const getCart = computed(() => cart.value);

   return {
      addProduct,
      removeProduct,
      updateProductAmount,
      getCart
   }
},
{
   persist: true
});
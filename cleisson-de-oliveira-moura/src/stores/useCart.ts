import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { formatPrice } from "../utilities/format";
import { CartItemsAmount, Product, UpdateProductAmountProps } from '../utilities/types';

export const useCart = defineStore('cart',() => {
   // State
   const cart = ref(
      useLocalStorage('cart', [] as Product[])
   );

   // Actions
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
   const cleanCart = () => {
      cart.value = [];
      localStorage.setItem('cart', JSON.stringify([]));
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

   // Getters
   const getCartLength = computed(() => cart.value.length);
   const getTotal = computed(() => {
      return cart.value.reduce((sumTotal, product) => {
         return (sumTotal = sumTotal + product.price * product.amount);
      }, 0)
   })
   const getFormattedCart = computed(() => {
      const cartFormatted = ref(cart.value.map((product) => ({
         ...product,
         priceFormatted: formatPrice(product.price),
         subTotal: formatPrice(product.price * product.amount)
      })));
      return cartFormatted.value;
   })
   const getCartItemsAmount = computed(() => {
      return cart.value.reduce((sumAmount, product) => {
         sumAmount[product.id] = product.amount;
         return sumAmount;
      }, {} as CartItemsAmount)
   })

   return {
      addProduct,
      removeProduct,
      updateProductAmount,
      cleanCart,
      getCartLength,
      getTotal,
      getFormattedCart,
      getCartItemsAmount
   }
},
{
   persist: true
});
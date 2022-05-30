/**
 * @vitest-environment happy-dom
 */

import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useCart } from '../../src/stores/useCart';
import { Product } from '../../src/utilities/types';

const mockProduct = {
   id: 1,
   category: "men's clothing",
   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
   price: 109.95,
   amount: 0,
   rating: {rate: 3.9, count: 120},
   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
} as Product
const mockProduct2 = {
   id: 2,
   category: "women's clothing",
   description: "loremw e fwef qerf er g wterg wrt g rt w tgwrtg",
   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
   amount: 0,
   price: 223.95,
   rating: {rate: 1.9, count: 430},
   title: "Blusa de couro lã",
} as Product

describe('useCart hook', ()=>{
   beforeEach(() => {
      // creates a fresh pinia and make it active so it's automatically picked
      // up by any useStore() call without having to pass it to it:
      // `useStore(pinia)`
      setActivePinia(createPinia())
    })

   it('should start empty', ()=>{
      const cart = useCart();
      expect(cart.getCartLength).toBe(0)

      cart.cleanCart()
   })

   it('should add product on Cart', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      expect(cart.cart[0].amount).toBe(1)

      cart.cleanCart()
   })

   it('should remove product on Cart', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      cart.removeProduct(mockProduct.id)
      expect(cart.getCartLength).toBe(0)

      cart.cleanCart()
   })

   it('should clean the Cart', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      cart.addProduct(mockProduct2)
      cart.cleanCart()
      expect(cart.getCartLength).toBe(0)

      cart.cleanCart()
   })

   it('should increment the product amount on cart', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      expect(cart.cart[0].amount).toBe(1)

      const amount = cart.cart[0].amount + 1;
      cart.updateProductAmount({productId: mockProduct.id, amount})
      expect(cart.cart[0].amount).toBe(2)

      cart.cleanCart()
   })

   it('should decrement the product amount on cart', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      expect(cart.cart[0].amount).toBe(1)
      
      cart.updateProductAmount({productId: mockProduct.id, amount: 2})
      expect(cart.cart[0].amount).toBe(2)

      const amount = cart.cart[0].amount - 1;
      cart.updateProductAmount({productId: mockProduct.id, amount})
      expect(cart.cart[0].amount).toBe(1)
      
      cart.cleanCart()
   })
   
   it('should return the cart item amount', ()=>{
      const cart = useCart();
      cart.addProduct(mockProduct)
      expect(cart.getCartItemsAmount[mockProduct.id]).toBe(1)
   
      cart.updateProductAmount({productId: mockProduct.id, amount: 2})
      expect(cart.getCartItemsAmount[mockProduct.id]).toBe(2)
   
      cart.cleanCart()
   })
})
<script setup lang="ts">
import { useCart } from '../stores/useCart';
import { formatPrice } from '../util/format';
import { Product } from '../types';
import deleteIcon from '../assets/trash-2.svg'
import incrementIcon from '../assets/plus-circle.svg'
import decrementIcon from '../assets/minus-circle.svg'

const { cart, removeProduct, updateProductAmount } = useCart();

const cartFormatted = cart.map((product) => ({
   ...product,
   priceFormatted: formatPrice(product.price),
   subTotal: formatPrice(product.price * product.amount),
}));

const total = formatPrice(
   cart.reduce((sumTotal, product) => {
      return (sumTotal = sumTotal + product.price * product.amount);
   }, 0)
);

function handleProductIncrement(product: Product) {
   const amount = product.amount + 1;
   updateProductAmount({ productId: product.id, amount });
}

function handleProductDecrement(product: Product) {
   const amount = product.amount - 1;
   updateProductAmount({ productId: product.id, amount });
}

function handleRemoveProduct(productId: number) {
   removeProduct(productId);
}

</script>

<template>
   <div class="container">
      <router-link class="backToHome" to="/">
         Voltar
      </router-link>
      <table>
         <thead>
            <tr>
               <th aria-label="product image" />
               <th>PRODUTO</th>
               <th>QTD</th>
               <th>SUBTOTAL</th>
               <th aria-label="delete icon" />
            </tr>
         </thead>
         <tbody>
            <tr v-for="product in cartFormatted" :key="product.id">
              <td>
                <img :src="product.image" :alt="product.title" />
              </td>
              <td>
                <strong>{{product.title}}</strong>
                <span>{{product.priceFormatted}}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    :disabled="product.amount <= 1"
                    @click="handleProductDecrement(product)"
                  >
                    <img class="icon" :src="decrementIcon" alt="Retirar um item">
                  </button>
                  <input
                    type="text"
                    readOnly
                    :value="product.amount"
                  />
                  <button
                    type="button"
                    @click="handleProductIncrement(product)"
                  >
                    <img class="icon" :src="incrementIcon" alt="Adicionar um item">
                  </button>
                </div>
              </td>
              <td>
                <strong>{{product.subTotal}}</strong>
              </td>
              <td>
                <button
                  type="button"
                  @click="handleRemoveProduct(product.id)"
                >
                  <img class="icon" :src="deleteIcon" alt="Deletar item">
                </button>
              </td>
            </tr>
         </tbody>
      </table>
      <footer>
         <button type="button">Finalizar pedido</button>
         <div>
            <span>TOTAL</span>
            <strong>{{total}}</strong>
         </div>
      </footer>
   </div>
</template>

<style scoped lang="scss">
.container {
   max-width: 1020px;
   margin: 0 auto;
   padding-top: 9rem;
   background: #fff;
   border-radius: 4px;

   .backToHome {
      display: inline-block;
      font-size: 1rem;
      font-weight: bold;
      margin-left: 1rem;
      margin-bottom: 1rem;

      background-color: #121414;
      border-radius: 4px;
      color: #fff;
      padding: 0.5rem 1rem;

      transition: all 200ms;

      &:hover {
         background: #535a5a;
      }
   }

   table {
      width: 100%;
      padding: 0 2rem;

      thead th {
         color: #999;
         text-align: left;
         padding: 12px;
      }

      tbody td {
         padding: 12px;
         border-bottom: 1px solid #eee;
      }

      img {
         height: 100px;
      }

      strong {
         color: #333;
         display: block;
      }

      span {
         display: block;
         margin-top: 5px;
         font-size: 18px;
         font-weight: bold;
      }

      div {
         display: flex;
         align-items: center;

         input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
         }
      }

      .icon {
         height: 20px;
         width: 20px;
      }

      button {
         background: none;
         border: 0;
         padding: 6px;

         svg {
            color: #7159c1;
            transition: color 0.2s;
         }

         &:hover {
            svg {
               color: rgb(83, 83, 83);
            }
         }

         &:disabled {
            svg {
               color: rgb(36, 36, 36);
               cursor: not-allowed;
            }
         }
      }
   }

   footer {
      margin-top: 2rem;
      padding: 2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
         background: #121414;
         color: #fff;
         border: 0;
         border-radius: 4px;
         padding: 12px 20px;
         font-weight: bold;
         text-transform: uppercase;
         transition: all 200ms;

         &:hover {
            background: #535a5a;
         }
      }

      div {
         display: flex;
         align-items: center;

         span {
            color: #999;
            font-weight: bold;
         }

         strong {
            font-size: 28px;
            margin-left: 5px;
         }
      }
   }
}
</style>
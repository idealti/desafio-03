<script setup lang="ts">
   import { onMounted, ref } from 'vue'
   import ProductsAPI from '../services/ProductsAPI'
   import { formatPrice } from '../utilities/format';
   import { Product } from '../utilities/types';
   import { useCart } from '../stores/useCart';
   import cartIcon from '../assets/shopping-cart.svg';
   import starIcon from '../assets/star.svg';
   import { storeToRefs } from 'pinia';
   import ProductsFilterVue from '../components/ProductsFilter.vue';
 
   // Using useCart hook
   const { addProduct } = useCart()
   const { getCartItemsAmount } = storeToRefs(useCart())


   // Rendering products filtered and sorted
   const products = ref<Product[]>([]);
   const loading = ref(true);

   const category = ref('all');
   const fetchProducts = async () => {
      const { data } = await ProductsAPI.getProducts(category.value)
      products.value = data
      console.log(`Filtering by ${category.value}`)
      loading.value = false
   }
   onMounted(() => {
      fetchProducts()
   })
   const setCategory = (newCategory: string) => {
      category.value = newCategory
      fetchProducts()
   }

   const sorterProducts = ref('descRating');
   const sortProducts = (sortBy: string) => {
      products.value = products.value.sort((a: Product, b: Product): any | undefined => {
         if (sortBy === 'descPrice') {
            return b.price - a.price
         }
         if (sortBy === 'ascPrice') {
            return a.price - b.price
         }
         if (sortBy === 'descRating') {
            return b.rating.rate - a.rating.rate
         }
         if (sortBy === 'ascRating') {
            return a.rating.rate - b.rating.rate
         }
      })
      console.log(`Sorting by ${sortBy}`)
   }
   onMounted(() => {
      sortProducts(sorterProducts.value)
   })
   const setSorterProducts = (newSort: string) => {
      sorterProducts.value = newSort
      sortProducts(newSort)
   }

   // Adding product on cart
   const handleAddProduct = (product: Product) => {
      addProduct(product)
   }
</script>

<template>
   <ProductsFilterVue @changeCategory="setCategory" @changeSort="setSorterProducts" />
   <div class="wrapProducts">
      <div v-if="loading" class="loadingAnimation">
         <div class="bouncingBalls">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         Loading...
      </div>
      <div class="product" v-else v-for="product in products" :key="product.id">
         <img class="productImage" :src="product.image" :alt="product.title" />
         <section>
            <h4>{{ product.title }}</h4>
            <div>
               <h6>{{product.rating.rate}}/5 <img :src="starIcon" alt="Estrela"> - {{product.rating.count}}</h6>
               <h5>{{ formatPrice(product.price) }}</h5>
            </div>
         </section>
         <p>{{ product.description }}</p>
         <button
            type="button"
            @click="handleAddProduct(product)"
         >
            <img :src="cartIcon" alt="icone de Carrinho de compras">
            <div>
               {{getCartItemsAmount[product.id] || 0}}
            </div>
            <span>ADD TO CART</span>
         </button>
      </div>
   </div>
</template>


<style scoped lang="scss">
.wrapProducts {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding-bottom: 2rem;
   margin: 0 auto;
   max-width: 1020px;

   .loadingAnimation {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 2rem;
      font-weight: 900;
      color: #fff;
      margin: 0 auto;
      text-align: center;
      position: absolute;
      left: 50%;
      right: 50%;
      padding-top: 10rem;

      .bouncingBalls {
         display: flex;
         justify-content: space-around;
         align-items: flex-end;
         width: 6.25rem;
         height: 6.25rem;
         margin-bottom: 1rem;

         div {
            width: 1.25rem;
            height: 1.25rem;
            background-color: #fff;
            border-radius: 50%;
            animation: bouncer 500ms cubic-bezier(.19, .57, .3, .98) infinite alternate;

            &:nth-child(2) {
               animation-delay: 100ms;
               opacity: .8;
            }
            &:nth-child(3) {
               animation-delay: 200ms;
               opacity: .6;
            }
            &:nth-child(4) {
               animation-delay: 300ms;
               opacity: .4;
            }
         }
      }
   }

   .product {
      display: flex;
      flex-direction: column;

      margin: 2rem 2rem 1rem;
      padding: 1rem;
      border-radius: 1rem;

      background-color: #fff;
      box-shadow: 0 0 30px 10px rgba(0,0,0, 0.5);

      .productImage {
         max-height: 150px;
         object-fit: contain;
         margin-bottom: 2rem;
      }

      section {
         h4 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
         }

         div {
            display: flex;
            justify-content: space-between;

            margin-bottom: 0.75rem;

            h6 {
               font-size: 0.8rem;
               font-weight: 400;
               color: gray;

               img {
                  display: inline-block;
                  vertical-align: top;
               }
            }

            h5 {
               font-size: 1rem;
               font-weight: 600;
               margin-bottom: 0.75rem;
               text-align: right;

               display: flex;
               align-items: center;

            }
         }
      }

      p {
         font-size: 0.8rem;
         margin-bottom: 0.5rem;
         max-height: 5rem;
         overflow-y: scroll;
      }

      button {
         display: flex;
         justify-content: center;
         align-items: center;

         height: 2rem;
         border: none;
         border-radius: 0.5rem;
         background-color: #121414;
         color: #fff;
         font-size: 0.8rem;
         font-weight: 600;
         cursor: pointer;
         padding: 0.5rem 1rem;

         &:hover {
            background: #535a5a;
         }

         img {
            height: 1rem;
            margin-right: 0.5rem;
         }

         span {
            margin-left: 1rem;
            font-size: 0.75rem;
            font-weight: 600;
         }
      }
   }
}

@media (max-width: 998px) {
   .wrapProducts {
      grid-template-columns: repeat(2, 1fr);
   }
}

@media (max-width: 648px) {
   .wrapProducts {
      grid-template-columns: 1fr;
   }
}

@keyframes bouncer {
   from {transform: translateY(0);}
   to {transform: translateY(-6.25rem);}
}
</style>
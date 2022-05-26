<script setup lang="ts">
   import { onMounted, ref } from 'vue'

   import ProductsAPI from '../services/ProductsAPI'

   import { formatPrice } from '../utilities/format';
   import { Product } from '../utilities/types';

   import cartIcon from '../assets/shopping-cart.svg';
   import starIcon from '../assets/star.svg';

   import { useCart } from '../stores/useCart';
   import { storeToRefs } from 'pinia';

   import ProductsFilterVue from '../components/ProductsFilter.vue';
   import ItemModal from '../components/modals/ItemModal.vue';
   import Loading from '../components/Loading.vue';

   const { addProduct } = useCart()
   const { getCartItemsAmount } = storeToRefs(useCart())

   // Modal component
   const modalIsOpen = ref(false)

   // Loading component
   const loading = ref(true);

   // Rendering filtered products by category
   const products = ref<Product[]>([]);

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

   // Rendering sorted products
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
      modalIsOpen.value = true
   }
</script>

<template>
   <ProductsFilterVue @changeCategory="setCategory" @changeSort="setSorterProducts" />
   <div class="wrapProducts">
      <div v-if="loading">
         <Loading />
      </div>
      <div class="product" v-else v-for="product in products" :key="product.id">
         <img class="productImage" :src="product.image" :alt="product.title" />
         <section>
            <router-link :to="{name: 'Product', params: {id: product.id}}">
               <h4>{{ product.title }}</h4>
            </router-link>
            <div>
               <h6>{{product.rating.rate}}/5 <img :src="starIcon" alt="Estrela"> - {{product.rating.count}}</h6>
               <h5>{{ formatPrice(product.price) }}</h5>
            </div>
         </section>
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
         <Teleport to="#modal">
            <Transition name="modal">
               <ItemModal v-if="modalIsOpen" @close="modalIsOpen = false" />
            </Transition>
         </Teleport>
   </div>
</template>


<style scoped lang="scss">
.wrapProducts {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   padding-bottom: 2rem;
   margin: 0 auto;
   max-width: 1020px;
   
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
            text-align: center;  

            &:hover {
               text-decoration: underline;
            }
         }

         div {
            display: flex;
            justify-content: space-around;

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
.modal-enter-active, .modal-leave-active {
   transition: all 300ms ease;
}
.modal-enter-from, .modal-leave-to {
   opacity: 0;
   transform: scale(1.1);
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
</style>
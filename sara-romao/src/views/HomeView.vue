<template>
  <div class="home">
    <h1>home {{$store.state.count}}</h1>
    <button @click="add">Increment</button>

    <main class="listProducts">
      <!--  <Product nome="sara"/> -->

      <div class="filters">
        <ul>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Mens's clothing</li>
          <li>Women's clothing</li>
        </ul>
      </div>

      <div class="productsContainer" v-if="listProducts !== null">
        <div v-for="product in listProducts" :key="product.id">
          <Product
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :price="product.price"
          />
        </div>
      </div>

      <div v-else>
        <p>Carregando...</p>
      </div>
    </main>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    Product,
  },

  data() {
    return {
      listProducts: null,
      id: 1,
    };
  },

  methods: {
    async fetchApi() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      this.listProducts = data;
    },

    add(){
      this.$store.commit('increment')
    }
    
  },

  mounted() {
    this.fetchApi();
  },
};
</script>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.productsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 20px;
}
</style>
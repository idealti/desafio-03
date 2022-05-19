<template>
  <div class="home">
    <h1>home</h1>

    <main class="listProducts">
      
      <div v-if="listProducts !== null">
        <div v-for="product in listProducts" :key="product.id">
          <p>{{ product.title }}</p>
        </div>
      </div>

      <div v-else>
        <p>Carregando...</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      listProducts: null,
      id: 1
    };
  },

  methods: {
    async fetchApi() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      this.listProducts = data;
      
    },
  },

  mounted() {
    this.fetchApi();
  },
};
</script>

<style scoped>
main{
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
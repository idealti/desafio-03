<template>
  <div class="container">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}</p>
      <button>Adicionar no Carrinho</button>
    </div>
  </div>
</template>

<script>
import Products from "../services/products";

export default {
  name: "HomeView",

  data() {
    return {
      products: [],
    };
  },

  mounted() {
    Products.list().then((res) => {
      this.products = res.data;
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 100%;
  max-width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 30px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: auto;
  height: auto;
  max-width: 250px;
  max-height: 350px;
}
</style>

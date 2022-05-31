<template>
  <Header />
  <div class="filter">
    <span>Filte aqui: </span>
    <select name="options" v-on:change="changeFilter($event)">
      <option value="products">Todos</option>
      <option value="products/category/electronics">Eletronicos</option>
      <option value="products/category/jewelery">Jóias</option>
      <option value="products/category/men's clothing">
        Roupas Masculinas
      </option>
    </select>
  </div>
  <div class="container">
    <div class="item" v-for="(products, index) in productsData" :key="index">
      <img :src="products.image" alt="" />
      <div class="infos">
        <h3>{{ products.title }}</h3>
        <h2>R${{ products.price }}</h2>
        <p>{{ products.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import Header from "./Header.vue";

export default {
  name: "myProducts",
  data() {
    return {
      teste: "",
      productsData: [],
      filterChange: this.$route.href,
    };
  },
  components: {
    Header,
  },
  methods: {
    async changeFilter(e) {
      await api.get(e.target.value).then((resp) => {
        this.productsData = resp.data;
        console.log(this.$router, "ezequiel");
      });
    },
  },
  mounted() {
    api.get("/products").then((resp) => {
      this.productsData = resp.data;
    });
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.filter {
  width: 80%;
  margin: 50px auto;
}

.item {
  width: 25%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

img {
  width: 200px;
  height: 200px;
}

select {
  width: 16rem;
  height: 2rem;
  border-radius: 9px;
  border: 1px solid rgb(146, 146, 146);
  padding: 0 0.5rem;
  margin: 0 auto;
}

select:focus {
  outline: 2px solid #a33954;
  box-shadow: 0 0 0 0;
  border: 0;
}

span {
  font-size: 1.2rem;
}
</style>

<template>
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
        <button>
          <img
            class="cart-img"
            src="src\assets\pngaaa.com-3531901.png"
            alt=""
          />
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "myProducts",
  data() {
    return {
      productsData: [],
    };
  },
  methods: {
    async changeFilter(e) {
      await api.get(e.target.value).then((resp) => {
        this.productsData = resp.data;
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
  width: 30%;
  height: 100%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;
  overflow: hidden;
}

.infos {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 12rem;
  width: 100%;
}

img {
  width: 250px;
  height: 250px;
  padding: 10px 10px;
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

h2 {
  margin-top: 20px;
}

h3 {
  height: 5rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #461723;
  color: white;
  border-radius: 3px;
  padding: 0.5 rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-img {
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
}
</style>

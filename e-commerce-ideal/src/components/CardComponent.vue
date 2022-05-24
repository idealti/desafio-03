<template>
  <div class="container">
    <div class="products" v-for="(product, index) in products" :key="index">
      <p class="product__category">{{ product.category }}</p>
      <img
        class="product__image"
        :alt="product.image"
        :title="product.title"
        :src="product.image"
      />
      <div class="product__info">
        <p>{{ product.title }}</p>
        <div class="product__price-rate">
          <p>
            {{ product.rating.rate }}
          </p>
          <p>$ {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  name: "CardComponent",
  components: {
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    api.get("/products").then((response) => {
      this.products = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: calc(90%-14rem);
  padding: 2rem;
  min-height: 100vh;
  background-color: #ffffff;
  flex-wrap: wrap;
}
.products {
  margin: 10% auto;
  width: 70%;
  position: relative;
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #f97f51, #fd4756) 1 10%;
}
.product__image {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10% auto;
  background-color: rgb(255, 255, 255, 0.9);
  object-fit: contain;
  width: 50%;
  height: 15rem;
}
.product__category {
  background-image: linear-gradient(120deg, #fd4756 0%, #f97f51 100%);
  width: 30%;
  padding: 3%;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 0%;
  right: 0%;
}
.product__info {
  text-align: center;
}
.product__info p {
  margin-top: 1%;
}
.product__price-rate {
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;
}
</style>

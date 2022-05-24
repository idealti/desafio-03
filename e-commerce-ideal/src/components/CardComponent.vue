<template>
  <div>
    <h3>Carrinho: ({{ cart }})</h3>

    <div class="container">
      <div class="products" v-for="(product, index) in products" :key="index">
        <img
          class="product__image"
          :alt="product.image"
          :title="product.title"
          :src="product.image"
        />
        <div class="product__info">
          <p class="product__info-title">{{ product.title }}</p>
          <div class="product__price-rate">
            <p>
              {{ product.rating.rate }}
            </p>
            <p>$ {{ product.price }}</p>
            <button
              @click.prevent="
                removeCart(product)
              "
            >
              REMOVER CARRINHO
            </button>
            <button
              v-on:click.prevent="
                addCart(product)
              "
            >
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  name: "CardComponent",
  components: {},
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  mounted() {
    api.get("/products").then((response) => {
      this.products = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addCart(product) {
      this.cart.push(product);
      console.log(this.cart, "cart");
    },
    removeCart(product) {
      this.cart = this.cart.filter(
        (product_value, index) => product != product_value
      );
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: calc(90%-16rem);
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
  border-image: linear-gradient(to bottom, #e7eaef, #f97f51) 1 10%;
  position: relative;
}
.product__image {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10% auto;
  background-color: rgb(255, 255, 255, 0.9);
  object-fit: contain;
  width: 50%;
  height: 15rem;
}

.product__info {
  text-align: center;
}
.product__info p {
  margin-top: 1%;
}
.product__info-title {
  margin: 5% 10%;
  height: 4vh;
}
.product__price-rate {
  display: flex;
  justify-content: space-between;
  padding: 5% 10%;
  font-family: "Tenor Sans";
}
</style>

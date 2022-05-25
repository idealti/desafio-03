<template>
  <div>
    <div class="cart">
      <h3 class="cart">cart: {{ cart.length }}</h3>
      <div class="cart-item">
        <div v-for="item in cart" :key="item.id">
          <img
            class="cart__image"
            :alt="item.image"
            :title="item.title"
            :src="item.image"
          />
          <div class="cart__info">
            <p class="cart__info-title">{{ item.title }}</p>
            <div class="cart__price-rate"></div>
          </div>
          <button @click.prevent="removeCart(item)">REMOVER CARRINHO</button>
        </div>
      </div>
    </div>
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
          </div>
          <button class="button-cart" v-on:click.prevent="addCart(product)">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  name: "CardComponent",
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
      let index = this.cart.indexOf(product);
      if (index === -1) {
        return index;
      }
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;1,6..96,400&display=swap");

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
  background-color: #ffffff;

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

.product__info p {
  margin-top: 1%;
  text-align: center;
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
.button-cart {
  background-color: #f97f51;
  border: none;
  width: 80%;
  height: 3rem;
  margin: 2% 10%;
}
.cart {
  z-index: 100;
  position: fixed;
  top: 6%;
  right: 3%;
  font-size: 2rem;
  font-style: italic;
  font-weight: 900;
}
.cart__box {
  background-color: #f97f51;
}
.cart-item {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
}
.cart__image {
  width: 20%;
  height: 2rem;
  object-fit: contain;
}
</style>

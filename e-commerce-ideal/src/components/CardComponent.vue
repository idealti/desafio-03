<template>
  <div>
    <div class="cart" v-on:click="modal = !modal">
      <div v-if="modal === false" class="cart__component">
        <p class="cart__length">{{ cart.length }}</p>
        <CartIcon size="50" />
      </div>
    </div>
    <div v-if="modal" class="cart-item">
      <button class="button-cart--close" v-on:click="modal = !modal">
        <Close />
      </button>
      <p class="cart__item-text">Seu Carrinho de compras:</p>
      <div class="cart-item-div" v-for="item in cart" :key="item.id">
        <img
          class="cart__image"
          :alt="item.image"
          :title="item.title"
          :src="item.image"
        />
        <div class="cart__info">
          <p class="cart__info-title">{{ item.title }}</p>
          <p class="cart__info-price">${{ item.price }}</p>
        </div>
        <button class="button-cart--remove" @click.prevent="removeCart(item)">
          Remover
        </button>
      </div>
      <p v-if="cart.length > 0" class="cart__item-text">
        Total: {{ somaCart(cart) }}
      </p>
      <p v-else class="cart__item-text">Nenhum item selecionado</p>
      <button class="cart__item-buy" v-if="cart.length > 0">
        <a href="/comprar">Finalizar compra</a>
      </button>
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
            <div>
              <span><StarIcon fillColor="#f97f51" size="30" /></span>
              <p class="product__rating">{{ product.rating.rate }}/5</p>
            </div>
            <p>$ {{ product.price }}</p>
          </div>
          <button class="button-cart" v-on:click.prevent="addCart(product)">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import StarIcon from "vue-material-design-icons/Star.vue";
import CartIcon from "vue-material-design-icons/Cart.vue";
import Close from "vue-material-design-icons/Close.vue";

export default {
  name: "CardComponent",
  components: { StarIcon, CartIcon, Close },
  data() {
    return {
      products: [],
      cart: [],
      modal: false,
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
    somaCart(cart) {
      const somaPrice = cart
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0);
      return somaPrice.toFixed(2);
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
  display: flex;
  margin: 2rem auto;
  background-color: rgb(255, 255, 255, 0.9);
  object-fit: contain;
  width: 50%;
  height: 10rem;
}
.product__info {
  font-size: 1vw;
  font-weight: 900;
  text-align: center;
  font-family: "Tenor Sans";
}
.product__info p {
  margin-top: 1%;
  text-align: center;
}
.product__info-title {
  margin: 1% 10% 10%;
  height: 5vh;
  text-align: center;
  word-break: break-all;
}
.product__price-rate {
  width: calc(100%-3rem);
  display: flex;
  justify-content: space-between;
  padding: 2% 1.5rem;
  align-items: center;
}
.product__price-rate div {
  display: flex;
  justify-content: space-around;
  padding: 5% 0;
}
.product__rating {
  padding: 12% 2%;
}
.button-cart {
  background-color: #f97f51;
  border: none;
  width: 80%;
  height: 3rem;
  margin: 2% 10%;
}
.cart {
  z-index: 10;
  position: fixed;
  top: 6%;
  right: 3%;
}
.cart__component {
  position: relative;
}
.cart__length {
  font-family: "Gill Sans", sans-serif;
  position: absolute;
  top: -25%;
  left: 30%;
  font-size: 25px;
  font-weight: 900;
  z-index: -1;
  color: #e2460d;
}

.cart-item {
  background-color: #e7eaef;
  display: flex;
  flex-direction: column;
  padding: 2% 1%;
  width: 20vw;
  height: auto;
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  overflow: auto;
}

.cart__item-text {
  text-align: center;
  padding: 5%;
  font-family: "Tenor Sans";
  font-weight: 900;
}
.cart-item-div {
  background-color: #ffffff;
  width: auto;
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 5%;
  height: auto;
}
.cart__image {
  margin: auto;
  width: 70px;
  height: 10vh;
  object-fit: contain;
}
.cart__info {
  width: 95%;
  font-size: 1.5ch;
  margin: 5% 2.5%;
  display: flex;
  flex-direction: column;
  font-family: "Tenor Sans";
  font-weight: 900;
  text-align: center;
}
.cart__info-price {
  margin: 10% auto;
}
.button-cart--remove {
  background-color: #7e7e7e;
  border: none;
  height: 2rem;
  font-size: 1.2ch;
  margin: 8% 0;
  color: #ffffff;
}
.button-cart--close {
  background-color: transparent;
  border: none;
  width: 30%;
  margin: 1% auto;
}
.cart__item-buy {
  padding: 1% auto;
  background-color: #89e83a;
  border: none;
  height: 3rem;
  color: #e7eaef;
  margin-bottom: 20%;
}
.cart__item-buy a {
  font-family: "Gill Sans", sans-serif;
  color: #000000;
  font-size: 2ch;
  font-weight: 900;
}
.cart__item-buy:hover {
  background-color: #bbee5b;
}
</style>

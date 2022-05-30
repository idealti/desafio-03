<template>
  <div>
    <!-- Cart -->
    <div class="cart" v-on:click="openCart = !openCart">
      <div v-if="openCart === false" class="cart__icon">
        <p class="cart__icon--length">{{ cart.length }}</p>
        <CartIcon size="50" />
      </div>
    </div>
    <!-- Cart -->

    <!-- CartItens -->
    <div v-if="openCart" class="cart__products">
      <button class="cart__products--close" v-on:click="openCart = !openCart">
        <Close />
      </button>
      <p class="cart__products-title">Seu Carrinho de compras:</p>
      <button
        v-if="cart.length > 0"
        class="cart__products--clean-cart"
        @click.prevent="cleanCart(cart)"
      >
        Limpar Carrinho
      </button>
      <div class="cart__products--list" v-for="item in cart" :key="item.id">
        <div class="cart__products--list-details">
          <img
            class="cart__products--image"
            :alt="item.image"
            :title="item.title"
            :src="item.image"
          />
          <div class="cart__products--infos">
            <p>{{ item.title }}</p>
            <p>${{ item.price }}</p>
          </div>
          <button
            class="cart__products--remove"
            @click.prevent="removeFromCart(item)"
          >
            Remover
          </button>
        </div>
        <p class="cart__products--info-description">{{ item.description }}</p>
      </div>
      <p v-if="cart.length > 0" class="cart__products-title">
        Total: {{ totalCart(cart) }}
      </p>
      <p v-else class="cart__products-title">Nenhum item selecionado</p>
      <button class="cart__products--button-buy" v-if="cart.length > 0">
        <a href="/">Finalizar compra</a>
      </button>
    </div>
    <!-- CartItens -->

    <!-- Filter -->
    <div v-bind:class="openCart ? 'filterWithopenCart' : 'filter'">
      <input type="text" placeholder="Buscar produto" v-model="filter" />
      <select v-model="selected">
        <option
          v-for="option in category"
          v-bind:value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <select v-model="selectedRate">
        <option
          v-for="option in rate"
          v-bind:value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <button
        class="filter__button"
        title="Ordenar por avaliação"
        @click="orderFilter"
      >
        Ordenar por avaliação
      </button>
      <button class="filter__button" title="Limpar filtro" @click="cleanFilter">
        Limpar filtros
      </button>
    </div>
    <!-- Filter -->

    <div v-if="filterProducts >= 0" class="spinner">
      <HollowDotsSpinner :dot-size="20" :dots-num="4" color="#d06321" />
    </div>

    <!-- Container -->
    <div v-bind:class="openCart ? 'containerWithopenCart' : 'container'">
      <div
        v-bind:class="openCart ? 'productsWithopenCart' : 'products'"
        v-for="(product, index) in filterProducts"
        :key="index"
      >
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
              <span><StarIcon fillColor="#f4d376" size="25" /></span>
              <p class="product__rating">{{ product.rating.rate }}/5</p>
            </div>
            <div>
              <p>$ {{ product.price }}</p>
            </div>
          </div>
          <button
            class="product__button--add-cart"
            v-on:click.prevent="addToCart(product)"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
    <!-- Container -->
  </div>
</template>

<script>
import api from "@/services/api";
import StarIcon from "vue-material-design-icons/Star.vue";
import CartIcon from "vue-material-design-icons/Cart.vue";
import Close from "vue-material-design-icons/Close.vue";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  name: "CardComponent",
  components: { StarIcon, CartIcon, Close, HollowDotsSpinner },
  data() {
    return {
      products: [],
      cart: [],
      openCart: false,
      filter: "",
      selected: null,
      category: [
        { value: null, text: "Selecione uma categoria" },
        { value: "men's clothing", text: "Men's clothing" },
        { value: "jewelery", text: "Jewelery" },
        { value: "electronics", text: "Electronics" },
        { value: "women's clothing", text: "Women's clothing" },
      ],
      selectedRate: 0,
      rate: [
        { value: 0, text: "Filtrar por avaliação" },
        { value: 1, text: "Maior que 1 estrela" },
        { value: 2, text: "Maior que 2 estrelas" },
        { value: 3, text: "Maior que 3 estrelas" },
        { value: 4, text: "Maior que 4 estrelas" },
        { value: 5, text: "5 estrelas" },
      ],
    };
  },
  mounted() {
    api.get("/products").then((response) => {
      this.products = response.data;
      console.log(response.data);
    });
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      console.log(this.cart, "cart");
    },
    removeFromCart(product) {
      let index = this.cart.indexOf(product);
      if (index === -1) {
        return index;
      }
      this.cart.splice(index, 1);
    },
    totalCart(cart) {
      const somaPrice = cart
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0);
      return somaPrice.toFixed(2);
    },
    cleanFilter() {
      this.filter = "";
      this.selected = null;
      this.selectedRate = 0;
      this.products.sort((a, b) => a.id - b.id);
    },
    orderFilter() {
      this.products.sort((a, b) => b.rating.rate - a.rating.rate);
    },
    cleanCart(cart) {
      this.cart = [];
    },
  },
  computed: {
    filterProducts() {
      let filteredProducts = [];
      filteredProducts = this.products.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(this.filter.toLowerCase()) > -1 &&
          item.rating.rate >= this.selectedRate &&
          (this.selected === null || item.category === this.selected)
        );
      });
      return filteredProducts;
    },
  },
};
</script>

<style>
@import url("./CardComponent.css");
</style>

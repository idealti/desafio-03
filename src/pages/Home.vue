<script setup lang="ts">
import { onMounted, ref } from 'vue';
import api from '../services/api';
import { IProducts } from '../types/products.type';
let products = ref(<IProducts[]>[]);


async function fetchProducts() {
  try {
    const productsData = await api.get('/products?limit=12');
    products.value = productsData.data;
     console.log(products);
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}

onMounted(() => {
  fetchProducts();
})







</script>

<template>
  <div class="home">
    <!-- <button>
      <router-link to="/about">About</router-link>
    </button> -->

    <div class="filter">

      <fieldset>
        <legend>Filtrar por:</legend>
        <input type="radio" name="option" value="clothing" />
        <label>Roupa</label> <br />

        <input type="radio" name="option" value="jewel" />
        <label>Jóias</label> <br />

        <input type="radio" name="option" value="electronics" />
        <label>Eletrônicos</label>

      </fieldset>
    </div>

    <div class="galerie">
      <div class="productBox" v-for="product in products"  :key="product.id">
        <h2>{{product.title}}</h2>
        <img :src="product.image"/>
        <p>{{product.price}}</p>
        <button>Add ao carrinho</button>
      </div>
    </div>


  </div>
</template>

<style>
.home {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.filter {
  background: green;
  width: 15%;
}

.galerie {
  width: 80%;
  background: blue;
  display: flex;
  flex-wrap: wrap;
}

.productBox {
  width: 17rem;
  border: 1px solid red;
}

.galerie img {
  width: 15rem;
}


</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import api from '../services/api';
import { IProducts } from '../types/products.type';

let products = ref(<IProducts[]>[]);

async function fetchProducts() {
  try {
    const productsData = await api.get("/products?limit=12");
    products.value = productsData.data;
    console.log(products.value);
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}

onMounted(() => {
  fetchProducts();
})


//filtrando itens
async function filterEletronics() {
  try {
    const productsData = await api.get("/products/category/electronics?limit=4");
    products.value = productsData.data;
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}

async function filterClothing() {
  try {
    const productsData = await api.get("/products?limit=4");
    products.value = productsData.data;
    console.log(products.value);
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}

async function filterJewelery() {
  try {
    const productsData = await api.get("/products/category/jewelery");
    products.value = productsData.data;
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}




let cart: any = [];

function addInCart(product: { id: number, title: string }) {
 
  cart.push(product)
  const addItem = localStorage.setItem('products', JSON.stringify(cart));
  alert("Produto adicionado ao carrinho")

  const countProducts = JSON.parse(localStorage.getItem("products")!).length;

  console.log(countProducts);

}



</script>

<template>
  <div class="home">
    <div class="filter">

      <fieldset>
        <legend>Filtrar por:</legend>
        <input type="radio" name="option" value="allProducts" id="roupas" @click="fetchProducts" />
        <label>Todos os produtos</label> <br />


        <input type="radio" name="option" value="clothing" @click="filterClothing"/>
        <label>Roupas</label> <br />

        <input type="radio" name="option" value="jewel" @click="filterJewelery" />
        <label>Jóias</label> <br />

        <input type="radio" name="option" value="electronics" @click="filterEletronics" />
        <label>Eletrônicos</label>

      </fieldset>
    </div>

    <div class="galerie">
      <div class="productBox" v-for="product in products" :key="product.id">
        <div class="imageBox">
          <img :src="product.image" />
        </div>
        <h3>{{ product.title }}</h3>
        <p>R$ {{ product.price }}</p>
        <p>Avaliação {{product.rating.rate}}/5.0</p>
        <button class="buyButton" @click="addInCart(product)">Add ao carrinho</button>
      </div>
    </div>


  </div>
</template>

<style>
.home {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.filter {
  width: 15%;
}

.galerie {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}

.productBox {
  width: 20rem;
  margin: 10px;
}

.imageBox {
  width: 20rem;
  height: 300px;
}

.imageBox img {
  max-width: 100%;
  max-height: 100%;
  align-items: center;
}


.buyButton {
  width: 20rem;
  border: none;
  height: 30px;
  background: rgb(255, 47, 47);
  color: white;
  position: bottom;
}

.buyButton:hover {
  background: rgb(224, 18, 18);
  transition: all 0.5s;
}
</style>

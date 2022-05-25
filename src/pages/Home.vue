<script setup lang="ts">
import { onMounted, ref } from 'vue';
import api from '../services/api';
import { IProducts } from '../types/products.type';

let products = ref(<IProducts[]>[]);
let carrinho = null;

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
    const productsData = await api.get("/products/category/electronics");
    products.value = productsData.data;
  }
  catch (error) {
    alert(error);
    console.log(error);
  }
}

async function filterClothing() {
  try {
    const productsData = await api.get("/products/category/men's clothing");
    products.value = productsData.data;
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

// const teste = {
//   name: "Produtos",
//   data() {
//     return {
//       produtos: [],
//       produto: {
//         id: "",
//         titulo: "",
//         preco: "",
//         descricao: "",
//         categoria: "",
//         img: ""
//       }
//     }
//   }
// }


// methods: {
//   fetchProducts() {
//     fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//             }
  
// }
function loadProduto(productId: number) {
 console.log(productId);

 carrinho = productId;
 console.log(carrinho);

// var teste = document.getElementsByClassName("teste");
// console.log(teste);
}



</script>

<template>
  <div class="home">
    <div class="filter">

      <fieldset>
        <legend>Filtrar por:</legend>
        <input type="radio" name="option" value="allProducts" id="roupas" @click="fetchProducts"/>
        <label>Todos os produtos</label> <br />
        

        <input type="radio" name="option" value="clothing" />
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
        <p class="teste">{{product.id}}</p>
        <h3>{{ product.title }}</h3>
        <p>R$ {{ product.price }}</p>
        <button class="buyButton" @click="loadProduto(product.id)">Add ao carrinho</button>
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
  border: 1px solid blue;
}

.imageBox {
  width: 20rem;
  height: 300px;
  border: 1px solid black;
}

img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid red;
  align-items: center;
}

/* .galerie img {
  width: 18rem;
  height: 16rem;
} */

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

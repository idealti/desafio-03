<template>
  <div class="page-container">
    <div class="container-nav-buttons">
      <button class="btn-nav" @click="homePage = true">
        <fa :icon="['fas', 'bag-shopping']" class="icon-nav" /> Products
      </button>
      <button class="btn-nav" @click="homePage = false">
        <fa :icon="['fas', 'cart-shopping']" class="icon-nav" /> Cart({{
          cart.length
        }})
      </button>
    </div>
    <div class="container-home-page" v-if="homePage">
      <div class="container-buttons-filter">
        <div class="container-buttons-category">
          <button class="btn-category" @click="clearFilterCategory">All</button>
          <button
            class="btn-category"
            v-for="(category, index) in allCategories"
            :key="index"
            @click="filterCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        <div class="sort-container">
          <label for="sort">Sort By:</label>
          <select
            name="sort"
            class="sort-select"
            v-model="sort"
            @change="sortProducts(sort)"
          >
            <option value="PriceHL">Price: High-Low</option>
            <option value="PriceLH">Price: Low-High</option>
            <option value="RatingHL">Rating: High-Low</option>
            <option value="RatingLH">Rating: Low-High</option>
            <option value="AlphabeticalOrder">Alphabetical Order</option>
          </select>
        </div>
      </div>
      <div class="container-products">
        <div
          class="card-product"
          v-for="product in showProducts"
          :key="product.id"
        >
          <img class="product-image" :src="product.image" alt="product-image" />
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p>
            Rating: <fa :icon="['fas', 'star']" class="icon-rating" />
            {{ product.rating.rate }}
          </p>
          <h2>${{ product.price }}</h2>
          <button
            class="btn-add-cart"
            @click="addToCart(product.title, product.image, product.price)"
          >
            <fa :icon="['fas', 'cart-plus']" class="icon-btn-cart" /> Add to
            Cart
          </button>
        </div>
      </div>
    </div>
    <div class="container-cart-page" v-else>
      <h1 class="title-cart-page">Your Cart</h1>
      <div class="cart-table-heading">
        <div>Product:</div>
        <div>Description:</div>
        <div>Quantity:</div>
        <div>Unit Price:</div>
      </div>
      <div
        class="container-cart-itens"
        v-for="(product, index) in cart"
        :key="index"
      >
        <img
          class="product-image-cart"
          :src="product.productImage"
          alt="product-image"
        />
        <b>{{ product.productTitle }}</b>
        <p>{{ product.quantity }}</p>
        <p>$ {{ product.productPrice }}</p>
      </div>
      <div class="container-purchase-amount">
        <h1>Total: $ {{ this.totalPurchaseAmount.toFixed(2) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"

export default {
  name: "ProductsList",
  data() {
    return {
      allProducts: [],
      showProducts: [],
      allCategories: [],
      sort: null,
      cart: [],
      homePage: true,
      totalPurchaseAmount: 0,
    };
  },
  async created() {
    await api.get().then((response) => {
      this.allProducts = response.data
      this.showProducts = this.allProducts
    }) //Função assíncrona para pegar os produtos da Fake Store API
    await api.get("/categories").then((response) => {
      this.allCategories = response.data
    })  //Função assíncrona para pegar as categorias da Fake Store API
  },
  methods: {
    filterCategory(category) {
      console.log(category)
      this.showProducts = this.allProducts.filter(
        (product) => product.category === category
      )
    }, // Filtrar os produtos por categoria
    clearFilterCategory() {
      this.showProducts = this.allProducts
    }, // Limpar o filtro de categoria exibindo todos os produtos
    sortProducts(e) {
      console.log(e)
      if (e === "PriceHL") {
        this.showProducts.sort(function (a, b) {
          if (a.price < b.price) {
            return true
          } else {
            return -1
          }
        })
      }
      if (e === "PriceLH") {
        this.showProducts.sort(function (a, b) {
          if (a.price < b.price) {
            return -1
          } else {
            return true
          }
        })
      }
      if (e === "RatingHL") {
        this.showProducts.sort(function (a, b) {
          if (a.rating.rate < b.rating.rate) {
            return true
          } else {
            return -1
          }
        })
      }
      if (e === "RatingLH") {
        this.showProducts.sort(function (a, b) {
          if (a.rating.rate < b.rating.rate) {
            return -1
          } else {
            return true
          }
        })
      }
      if (e === "AlphabeticalOrder") {
        this.showProducts.sort(function (a, b) {
          if (a.title < b.title) {
            return -1
          } else {
            return true
          }
        })
      }
    }, //Ordenação dos produtos por preço, nota e ordem alfabética
    addToCart(productTitle, productImage, productPrice) {
      if (this.cart.length === 0) {
        this.cart.push({
          productTitle,
          productImage,
          productPrice,
          quantity: 1,
        }) //Se o carrinho estiver vazio, adiciona diretamente o produto no carrinho
        this.totalPurchaseAmount += productPrice //Adiciona o valor do produto ao valor total da compra
      } else {
        const cartIndex = this.cart.findIndex(
          (prd) => prd.productTitle === productTitle
        ) //Procura dentro do carrinho se já há algum produto adiciondado com o mesmo nome e guarda o index do array na variável
        if (cartIndex >= 0) {
          this.cart[cartIndex].quantity += 1 // Caso já tenha um produto com o mesmo nome, apenas adiciona mais uma unidade
          this.totalPurchaseAmount += this.cart[cartIndex].productPrice //Adiciona o valor do produto ao valor total da compra
        } else {
          this.cart.push({
            productTitle,
            productImage,
            productPrice,
            quantity: 1,
          }) //Caso não, adiciona o produto no carrinho
          this.totalPurchaseAmount += productPrice //Adiciona o valor do produto ao valor total da compra
        }
      }
    },
  },
}
</script>

<style scoped>
.page-container {
  width: 90vw;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.container-nav-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
}
.btn-nav {
  width: 180px;
  height: 60px;
  background: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 14px;
  border: 3px solid black;
}
.btn-nav:hover {
  cursor: pointer;
  background: black;
  color: white;
}
.icon-nav {
  font-size: 25px;
}
.container-buttons-filter {
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 60px 0;
}
.container-buttons-category {
  display: flex;
  gap: 30px;
}
.btn-category {
  height: 100px;
  background: none;
  border: none;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}
.btn-category:hover {
  cursor: pointer;
  border-bottom: 1px solid black;
  transition: 0.5s;
}
.sort-container label {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}
.sort-select {
  width: 220px;
  font-size: 22px;
}
.container-products {
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-product {
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: rgb(0, 0, 0, 0.75) 0px 4px 14px;
  border-radius: 14px;
  padding: 40px;
  text-align: center;
}
.product-image {
  width: 150px;
}
.card-product h1 {
  color: #f6593e;
  font-size: 22px;
}
.card-product p {
  width: 400px;
  font-size: 18px;
  color: #888888;
}
.icon-rating {
  color: yellow;
}
.card-product h2 {
  color: #f6593e;
  font-size: 20px;
}
.btn-add-cart {
  width: 200px;
  height: 50px;
  background: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 14px;
  border: 3px solid black;
  transform: scale(0.9);
}
.btn-add-cart:hover {
  cursor: pointer;
  background: black;
  color: white;
  transform: scale(1);
  transition: 0.8s;
}
.icon-btn-cart {
  font-size: 24px;
}
.title-cart-page {
  text-align: center;
  margin-bottom: 100px;
  font-size: 40px;
}
.cart-table-heading {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  border-bottom: 3px solid black;
  padding-bottom: 10px;
}
.cart-table-heading div {
  width: 25%;
  text-align: center;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
}
.container-cart-itens {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
}
.product-image-cart {
  width: 25%;
  padding: 20px 100px;
}
.container-cart-itens p,
b {
  width: 25%;
  text-align: center;
  font-size: 22px;
}
.container-cart-itens b {
  color: #f6593e;
}
.container-purchase-amount {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  margin-top: 20px;
}
</style>
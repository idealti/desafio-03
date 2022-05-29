<template>
  <div class="home">
    <div class="categoryFilter container">
      <ul>
        <li @click="filterCategory('')">All</li>
        <li @click="filterCategory('/category/electronics')">Electronics</li>
        <li @click="filterCategory('/category/jewelery')">Jewelery</li>
        <li @click="filterCategory(`/category/men's%20clothing`)">
          Mens's clothing
        </li>
        <li @click="filterCategory(`/category/women's%20clothing`)">
          Women's clothing
        </li>
      </ul>

      <div class="filterContent">
        <select v-model="selected" @change="orderBy">
          <option disabled value="">Order By</option>
          <option>Popularity</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>

    <main class="listProducts container">
      <div class="productsContainer" v-if="listProducts !== null">
        <div v-for="product in listProducts" :key="product.id">
          <Product :product="product" />
        </div>
      </div>

      <div class="loading" v-else>
        <img class="animeRota" src="/assets/loading.svg" alt="Loading" />
        <p>Loading...</p>
      </div>
    </main>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    Product,
  },

  data() {
    return {
      listProducts: null,
      id: 1,
      carrinho: this.$store.state.cart,
      selected: "",
      isActive: false,
    };
  },

  methods: {
    async fetchApi() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      this.listProducts = data;
    },

    async apiCategory(category) {
      this.isActive = !this.isActive;
      (this.listProducts = null), (this.selected = "");
      const res = await fetch(`https://fakestoreapi.com/products${category}`);
      const data = await res.json();
      this.listProducts = data;
    },

    add() {
      this.$store.commit("increment");

      console.log("carrinho", this.$store.state.cart);
    },

    filterCategory(category) {
      this.apiCategory(category);
    },

    orderBy() {
      console.log(this.selected);

      if (this.selected == "Popularity") {
        this.listProducts.sort(function (b, a) {
          if (a.rating.rate > b.rating.rate) {
            return 1;
          }
          if (a.rating.rate < b.rating.rate) {
            return -1;
          }

          return 0;
        });
      } else if (this.selected == "Low to High") {
        this.listProducts.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
      } else {
        this.listProducts.sort(function (b, a) {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
      }
    },
  },

  mounted() {
    this.fetchApi();
  },
};
</script>

<style scoped>
main {
  border-top: 2px solid rgb(228, 228, 228);
}

.productsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  gap: 30px 10px;
}

.categoryFilter {
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categoryFilter ul {
  display: flex;
  gap: 20px;
}

.categoryFilter ul li {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.categoryFilter ul li:after {
  content: "";
  width: 0%;
  height: 5px;
  border-radius: 5px;
  background: #75e8a4;
  transition: 0.8s;
}

.categoryFilter ul li:hover::after {
  width: 100%;
}

.filterContent {
  display: flex;
  flex-direction: column;
}

.filterContent select {
  width: 150px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
}

.filterContent select:focus {
  border: 2px solid #75e8a4;
}

.loading {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.animeRota {
  animation: animeRotate 0.8s ease-in infinite;
}

@media screen and (max-width: 789px) {
  .categoryFilter {
    flex-direction: column;
    padding: 10px;
  }

  .categoryFilter ul {
    max-width: 100%;
    gap: 10px 20px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .filterContent {
    margin-top: 10px;
  }
}
</style>
<template>
  <div class="home__container">
    <div class="container__cart" id="input">
      <div class="container--input">
        <input type="text" v-model="search" @keydown.enter="filterProducts" />
        <button @click="filterProducts">Search</button>
      </div>
    </div>

    <div class="container">
      <section v-if="isFilter" class="section__card">
        <d-card
          v-for="product in filteredProducts"
          :key="product.id"
          :list="product"
        />
      </section>

      <section v-else class="section__card">
        <d-card v-for="product in products" :key="product.id" :list="product" />
      </section>

      <div class="container__cart">
        <div class="container--input" id="input__cart">
          <input type="text" v-model="search" @keydown.enter="filterProducts" />
          <button @click="filterProducts">Search</button>
        </div>

        <d-cart />
      </div>
    </div>
  </div>
</template>

<script>
import DHeader from "../components/DHeader.vue";
import DCard from "../components/DCard.vue";
import DCart from "../components/DCart.vue";
export default {
  components: {
    DHeader,
    DCard,
    DCart,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
    isFilter() {
      return this.$store.state.products.isFilter;
    },
    filteredProducts() {
      return this.$store.state.products.filteredProducts;
    },
  },
  methods: {
    filterProducts() {
      return this.$store.commit("searchFilter", this.search);
    },
  },
};
</script>

<style scoped>
.home__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section__card {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}

.container--input {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
}

.container--input input {
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  margin-top: 20px;
  margin-right: 8px;
}

.container--input button {
  width: 76px;
  height: 50px;
  background: #37268c;
  border: 2px solid #37268c;
  margin-top: 20px;
  color: #f5f5f5;
  transition: 500ms;
  cursor: pointer;
}

.container button:hover {
  background-color: #7364bb;
  transition: 500ms;
}

.container__cart {
  display: flex;
  flex-direction: column;
  align-self: initial;
  margin-bottom: 12px;
}

#input__cart {
  display: flex;
}

#input {
  display: none;
}

@media (max-width: 600px) {
  .section__card {
    justify-content: center;
  }

  #input {
    display: flex;
    margin-bottom: 18px;
  }

  #input__cart {
    display: none;
  }
}
</style>

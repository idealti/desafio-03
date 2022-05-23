<template>
  <div class="container">
    <section class="card">
      <img :src="item.image" :alt="item.title" />
      <h1>{{ item.title }}</h1>
      <span>{{ item.description }}</span>
      <h3>Category: {{ item.category.toUpperCase() }}</h3>
      <h4>Price: $ {{ item.price }}</h4>
    </section>
    <div>
      <router-link to="/">
        <d-button>Home</d-button>
      </router-link>
      <d-button @click="addToCart">Buy now</d-button>
    </div>
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
export default {
  components: { DButton },
  computed: {
    item() {
      return this.$store.state.products.products.filter(
        (item) => item.id === parseInt(this.$route.params.id)
      )[0];
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("verifyProduct");
      this.$store.commit("addItem", this.item);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.card img {
  width: 200px;
  height: 200px;
}

.card h1 {
  font-weight: 700;
  font-size: 24px;
  color: #292929;
  margin-bottom: 12px;
  text-align: center;
}

.card span {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 12px;
  padding: 4px;
  text-align: justify;
  margin: 0;
}

.card h4,
h3 {
  font-weight: 600;
  font-size: 14px;
  color: #2e245e;
  margin: 0;
  margin-bottom: 12px;
}
</style>

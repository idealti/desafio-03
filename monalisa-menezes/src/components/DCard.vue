<template>
  <div class="card">
    <div class="card__image">
      <img :src="list.image" :alt="list.name" />
    </div>
    <button>{{ list.category }}</button>
    <h3 class="cut-text">{{ list.title.split(" ").slice(0, 4).join(' ') }}</h3>
    <span>⭐ {{ list.rating.rate }}</span>
    <h4>$ {{ list.price.toFixed(2) }}</h4>
    <h5 @click="addToCart">Buy now</h5>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: ["list"],
  computed: {
    ...mapActions(["addItem", "verifyProduct"]),
  },
  methods: {
    addToCart() {
      this.$store.commit("verifyProduct");
      this.$store.commit("addItem", this.list);
    },
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 270px;
  height: 328px;
  margin-top: 20px;
  margin-right: 8px;
  border: 2px solid #f5f5f5;
  transition: 500ms;
  overflow: auto;
}

.card:hover {
  border: 2px solid #2e245e;
  transition: 500ms;
}

.card__image {
  background-color: #f5f5f5;
  width: 266px;
  height: 154px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  align-items: center;
}
.card__image img {
  width: 130px;
  height: 130px;
}

.card button {
  width: 120px;
  height: 30px;
  background: #2e245e;
  border: 2px solid #2e245e;
  color: #f5f5f5;
  margin-bottom: 12px;
  align-self: flex-start;
  margin-left: 20px;
  transition: 500ms;
  cursor: pointer;
}

.card button:hover {
  background-color: #7364bb;
  transition: 500ms;
}

.card h3 {
  font-weight: 700;
  font-size: 14px;
  color: #292929;
  margin: 0;
  margin-bottom: 12px;
  text-align: center;
}

.card span {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 12px;
  padding: 4px;
  text-align: justify;
}

.card h4 {
  font-weight: 600;
  font-size: 14px;
  color: #2e245e;
  margin: 0;
  margin-bottom: 12px;
}

.card h5 {
  font-weight: 500;
  font-size: 14px;
  color: #242424;
  margin: 0;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 500ms;
}

.card h5:hover {
  color: #37268c;
  transition: 500ms;
  text-decoration: underline;
}

.cut-text {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  overflow: hidden;
  width: 240px;
}
</style>

<template>
  <div>
    <d-header />
    <d-card :list="productList" />
  </div>
</template>

<script>
import DHeader from "../components/DHeader.vue";
import DCard from "../components/DCard.vue"
import { http } from "../services/config";
export default {
  components: {
    DHeader,
    DCard
},
  data() {
    return {
      productList: "",
    };
  },
  created() {
     http
      .get("/products")
      .then((response) => this.productList = response.data)
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>

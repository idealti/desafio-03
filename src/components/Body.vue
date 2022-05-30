<template>
  <div class="body">
     <Header/>
    <div class="body-container">

      <Tfiltro :getCategory="getCategory" />
      <div class="body-produtos">
        <Tcard v-for="produto in produtos" :key="produto.id" :produto="produto"></Tcard>
        <!-- <div @click="changerCart()" class="cart"><img src="../assets/cart-icon.svg" alt="carrinho-con"></div> -->
      </div>

    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import { http } from "../service/Axios";
import Tcard from './Template/Tcard.vue'
import Tfiltro from './Template/Tfiltro.vue'
export default {

  data() {
    return {
      produtos: "",
      category: ""
    };
  },
  created() {
    http
      .get("/products")
      .then((response) => (this.produtos = response.data))
      .catch((err) => console.log(err));
  },
  components: {
    Tcard,
    Tfiltro,
    Header
  },
  methods: {
    getCategory(value) {
      this.category = value
      if (this.category== '') {
        http
          .get("/products")
          .then((response) => (this.produtos = response.data))
          .catch((err) => console.log(err));
      } else {
        http
          .get("/products/category/"+this.category)
          .then((response) => (this.produtos = response.data))
          .catch((err) => console.log(err));
      }
      console.log(this.category)
    }
  },


}
</script>

<style>
.body-container {
  margin: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.body-produtos {

  margin-top: 2em;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1024px;
}

@media (max-width: 700px) {
  .body-produtos{
    flex-direction: column;
  }
}

</style>
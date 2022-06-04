<template>
  <div class="card-container">
    <div class="card">
      <div class="card-image-container">
        <img class="card-image" :src="produto.image" alt="image-produto">
      </div>
      <TdadosCard :data-product="produto" />
      <div class="add-carrinho"><span @click="addCarrinho()">add to cart</span></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TdadosCard from './TdadosCard.vue'
export default {

  props: ['produto'],
  components: {
    TdadosCard
  },
  computed:{
    ...mapActions(['addProduto']),
  },
  methods: {
    addCarrinho(){
      this.$store.commit('addProduto',this.produto)
    }
  }
}
</script>

<style>
.card-container {

  width: 30%;
  width: 300px;
  height: 420px;
  position: relative;
}

.card {
  cursor: pointer;
  margin: 1em 0;
  width: 100%;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.25);
  transition: all .2s linear;

}

.card-image-container {
  width: 100%;
  height: 240px;
  background-color: white;
}

.card-image {
  position: absolute;
  left: 80px;
  top: 35px;
  max-width: 50%;
  height: 50%;

}

.card:hover{
  margin-top: 10px;
  height: 410px;
}

.add-carrinho{
  padding-top: 4%;
  text-align: center;

}
.add-carrinho span{
  color: #d28ade;
}
.add-carrinho:hover{
  transform: scale(1.1);
  color: #c792ea;
}
</style>
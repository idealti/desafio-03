<template>
  <div class="card">
    <div class="card__image">
      <img :src="list[0].image" :alt="list[0].name" />
    </div>
    <button>{{list[0].category}}</button>
    <h3>{{list[0].title}}</h3>
    <span>{{list[0].description}}</span>
    <h4>R$ {{list[0].price.toFixed(2).replace(".", ",")}}</h4>
    <span>Adicionar ao carrinho</span>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 296px;
  height: 408px;
  border: 2px solid #f5f5f5;
  margin: 24px;
}

.card__image{
  background-color: #F5F5F5;
  width: 296px;
  height: 154px;
  display: flex;
  justify-content: center;
}
.card__image img {
  width: 140px;
  height: 140px;
}
</style>

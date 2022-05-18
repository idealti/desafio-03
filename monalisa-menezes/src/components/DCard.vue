<template>
  <div class="card">
    <div class="card__image">
      <img :src="list.image" :alt="list.name" />
    </div>
    <button>{{ list.category }}</button>
    <h3 class="cut-text">{{ list.title }}</h3>
    <span class="cut-text">{{ list.description }}</span>
    <h4>R$ {{ list.price.toFixed(2).replace(".", ",") }}</h4>
    <h5>Adicionar ao carrinho</h5>
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
  width: 270px;
  height: 408px;
  margin-top: 20px;
  border: 2px solid #f5f5f5;
  transition: 1s;
}

.card:hover {
  border: 2px solid #2e245e;
  transition: 1s;
}

.card__image {
  background-color: #f5f5f5;
  width: 266px;
  height: 154px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}
.card__image img {
  width: 140px;
  height: 140px;
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
  transition: 1s;
  cursor: pointer;
}

.card button:hover {
  background-color: #f5f5f5;
  color: #2e245e;
  transition: 1s;
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
  transition: 1s;
}

.card h5:hover {
  color: #37268c;
  transition: 1s;
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

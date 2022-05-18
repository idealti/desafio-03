<template>
  <div class="item">
    <img
      src="https://images.lojanike.com.br/1024x1024/produto/camisa-nike-x-banheiristas-fc-dri-fit-unissex-BV6708-547-1-11637959727.jpg"
      alt=""
    />
    <div class="container__item">
      <h4>Lightweight Jacket</h4>
      <h6>$ 100.00</h6>
      <span>Descrição...</span>
      <span id="item__remove">Remove item</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  display: flex;
  padding: 4px;
  width: 280px;
  height: 90px;
  background: #ffffff;
}

.item img {
  width: 88px;
  height: 67px;
  margin-left: 14px;
  margin-right: 14px;
}

.container__item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.container__item h4 {
  font-weight: 700;
  font-size: 14px;
  color: #333333;
  margin: 0;
}

.container__item h6 {
  font-weight: 600;
  font-size: 12px;
  margin: 0;
  color: #2e245e;
}

.container__item span {
  font-weight: 400;
  font-size: 12px;
  color: #242424;
}

#item__remove {
  color: #2e245e;
  cursor: pointer;
  transition: 500ms;
}

#item__remove:hover {
  color: #7364bb;
  transition: 500ms;
  text-decoration: underline;
}
</style>

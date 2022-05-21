<template>
  <div class="productCart">
    <img :src="image" :alt="title" class="productImg" />
    <p class="productTitle">{{ title }}</p>
    <h3>${{ price }}</h3>
    <button>
      <div class="infoCart">
        <img src="/assets/cart-btn.svg" />
        <p>0</p>
      </div>
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["id", "title", "price", "image"],

  data() {
    return {};
  },
};
</script>

<style scoped>
.productCart {
  max-width: 200px;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.productImg {
  width: 100%;
  height: 150px;
  background: #fff;
  border-radius: 10px;

  object-fit: contain;
}

.productTitle {
  max-width: 60ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.productCart button {
  width: 100%;
  height: 35px;
  background: #75e8a4;
  border: none;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}

.productCart button:hover {
  background: #68e69c;
}

.infoCart {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
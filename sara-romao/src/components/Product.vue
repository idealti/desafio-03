<template>
  <div class="productCart">
    <router-link to="/">
      <img :src="image" :alt="title" class="productImg" />
      <p class="productTitle">{{ title }}</p>
      <h3>${{ price }}</h3>
    </router-link>
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
  max-width: 250px;
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
}

.productCart a {
  text-decoration: none;
  color: rgb(49, 49, 49);

  transition: 0.3s;
}

.productCart a:hover {
  color: rgb(0, 0, 0);
}

.productImg {
  width: 100%;
  height: 250px;
  background: #fff;
  border: 1px solid rgb(240, 240, 240);
  object-fit: contain;
  padding: 10px 5px;
}

.productTitle {
  max-width: 60ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0px 5px;
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
  background: #5cee99;
}

.infoCart {
  display: flex;
  align-items: center;
  gap: 5px;
}

.productCart h3 {
  margin: 5px 0px 10px;
}
</style>
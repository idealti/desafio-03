<template>
  <div class="cart__container">
    <div class="cart__title">
      <h3>Shopping cart</h3>
    </div>
    <div class="cart__content">
      <d-item v-if="isProduct" />
      <h3 v-if="!isProduct">Empty cart</h3>
      <span v-if="!isProduct">Add items</span>
    </div>

    <div class="cart__value" v-if="isProduct">
      <span>Quantity: </span>
      <span>Total: $ </span>
      <router-link id="cart__link" to="/"> Finalize purchase </router-link>
      <h4>Remove all</h4>
    </div>
  </div>
</template>

<script>
import DItem from "../components/DItem.vue";

export default {
  components: {
    DItem,
  },
  data() {
    return {
      isProduct: true,
    };
  },

};
</script>

<style>
.cart__container {
  width: 284px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.cart__title {
  width: 284px;
  height: 50px;
  background-color: #37268c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.cart__title h3 {
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
}

.cart__content {
  min-height: 214px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.cart__content h3 {
  font-weight: 700;
  font-size: 22px;
  color: #292929;
  text-align: center;
}

.cart__content span {
  font-weight: 400;
  font-size: 14px;
  color: #242424;
  text-align: center;
}

.cart__value {
  width: 284px;
  height: 136px;
  background: #292929;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.cart__value span {
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  margin-left: 8px;
  margin-top: 8px;
}

#cart__link {
  align-self: center;
  margin-top: 12px;
  text-decoration: none;
  color: #7364bb;
  transition: 500ms;
}

#cart__link:hover {
  color: #ffffff;
  transition: 500ms;
}

.cart__value h4 {
  align-self: center;
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  cursor: pointer;
  transition: 500ms;
}

.cart__value h4:hover {
  color: #7364bb;
  transition: 500ms;
  text-decoration: underline;
}
</style>

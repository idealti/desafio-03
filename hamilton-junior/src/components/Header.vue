<template>
  <header>
    <div class="cart" @click="cartActive = true">
      {{ cartTotal }} | {{ cartItemLength }}
    </div>
    <Cart
      :products="cartItems"
      :cartActive="cartActive"
      :cartTotal="cartTotal"
      :finalizePurchase="finalizePurchase"
      @closeModal="closeCartModal"
      @removeProduct="remove"
      @finalize="finalizePurchaseEvent"
    />
  </header>
</template>

<script>
import Cart from "./Cart.vue";

export default {
  name: "Header",
  props: ["cartTotal", "cartItems", "cartItemLength", "finalizePurchase"],
  components: {
    Cart,
  },
  data() {
    return {
      cartActive: false,
    };
  },
  methods: {
    closeCartModal() {
      this.cartActive = false;
    },
    remove(index) {
      this.$emit("removeItem", index);
    },
    finalizePurchaseEvent() {
      this.$emit("finalizePurchaseEvent");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.cart {
  font-size: 2rem;
  color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.cart::after {
  content: "";
  display: inline-block;
  background: url("../assets/carrinho.svg") no-repeat center center;
  width: 25px;
  height: 25px;
  margin-left: 10px;
}
</style>

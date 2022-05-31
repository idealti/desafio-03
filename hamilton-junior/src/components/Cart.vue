<template>
  <section class="cart_modal" :class="{ activeCart: cartActive }">
    <div class="cart_container">
      <button class="cart_close" @click="closeCartModal">X</button>
      <h2 class="cart_title">Carrinho</h2>
      <div v-if="products.length > 0">
        <ul class="cart_list">
          <li
            v-for="(product, index) in products"
            class="cart_item"
            :key="product.id"
          >
            <img :src="product.image" :alt="product.name" />
            <p class="cart_description">{{ product.description }}</p>
            <div class="cart_content">
              <p class="cart_price">{{ product.price }}</p>
              <p class="cart_amount">{{ product.amount }}</p>
              <button class="cart_remove" @click="removeItem(index)">X</button>
            </div>
          </li>
        </ul>
        <p class="cart_total">{{ cartTotal }}</p>
        <button class="cart_finish" @click="finalize">Finalizar Compra</button>
      </div>
      <p v-else>O carrinho está vazio.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartActive", "products", "cartTotal", "finalizePurchase"],
  methods: {
    closeCartModal() {
      this.$emit("closeModal");
    },
    removeItem(index) {
      this.$emit("removeProduct", index);
    },
    finalize() {
      this.$emit("finalize");
      this.closeCartModal();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1.6rem;
}
.cart_modal::before {
  content: "";
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.cart_modal {
  position: absolute;
  flex-direction: column;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 2rem;
  display: none;
}
.cart_modal.activeCart {
  display: block;
}
.cart_container {
  position: relative;
  margin: 8rem auto;
  background: #fff;
  padding: 4rem;
  max-width: 800px;
  animation: fadeInDown 0.3s forwards;
}

.cart_title {
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #000;
  padding-bottom: 2rem;
}
.cart_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}
.cart_content {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
.cart_item img {
  width: 100px;
}
.cart_description {
  font-size: 1.2rem;
  max-width: 60ch;
}
.cart_remove {
  border: none;
  font-size: 2rem;
  cursor: pointer;
  background: transparent;
}
.cart_price {
  font-size: 2rem;
  text-align: right;
  color: #e80;
}
.cart_amount {
  font-size: 1.6rem;
}
.cart_total {
  text-align: right;
  padding: 1rem 0;
  border-bottom: 2px solid #000;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
.cart_close {
  border-radius: 50%;
  border: 2px solid #000;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.cart_finish {
  display: block;
  margin-left: auto;
  background: #000;
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 2.5rem;
  border: none;
  font-family: "Noto Serif";
  cursor: pointer;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@media screen and (max-width: 768px) {
  .cart_item {
    flex-direction: column;
    align-items: flex-start;
  }
  .cart_content {
    flex: 1;
    gap: 2rem;
  }
}
</style>

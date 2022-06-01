<template>
  <Header />
  <main>
    <section class="products-data">
      <h1>Produto</h1>
      <div class="cart-data">
        <div class="product-img">
          <img
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            alt="Produto adicionado ao carrinho"
          />
        </div>
        <div class="infos">
          <h2>Product name</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            recusandae, autem sint reiciendis earum voluptate asperiores vero
            architecto repellendus quia aut soluta adipisci nihil ea culpa
            aperiam ratione perspiciatis repellat.
          </p>
          <span>R$ 150,00</span>
        </div>
      </div>
    </section>
    <section class="finish-buy">
      <h1>Resumo</h1>
      <h4>Valor dos produtos: R$ 150,00</h4>
      <div class="pix">
        <h3>Valor no <span>PIX</span></h3>
        <span class="pix-price">R$: 135,00</span>
      </div>
      <button>IR PARA O PAGAMENTO</button>
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "myCart",
  components: {
    Header,
  },
};
</script>

<style scoped>
main {
  width: 80%;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  display: flex;
}

h1 {
  padding: 0 3rem;
  margin-top: 1rem;
}

h2 {
  margin-bottom: 1rem;
}

h3 {
  padding: 1rem 3rem;
  font-size: 1.4rem;
}

h4 {
  padding: 1rem 3rem 0 3rem;
}

p {
  margin-bottom: 1rem;
  width: 90%;
}

span {
  font-size: 1.4rem;
  font-weight: bold;
}

img {
  padding: 3rem;
  width: 250px;
  height: 250px;
}

button {
  display: flex;
  justify-content: center;
  color: white;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 90%;
  margin: 3rem auto;
  background-color: #461723;
}

.products-data {
  margin-top: 8rem;
  /* margin-right: 10%; */
  width: 60%;
  height: 20rem;
  border: 2px solid #ccc;
  border-radius: 7px;
  background-color: white;
}

.finish-buy {
  margin-top: 8rem;
  width: 30%;
}

.cart-data {
  display: flex;
  align-items: center;
}

.finish-buy {
  height: 20rem;
  background-color: white;
  border: 2px solid #ccc;
}

.pix {
  background-color: rgb(52, 117, 71, 0.5);
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
}

.pix-price {
  padding: 1rem 3rem;
}
</style>

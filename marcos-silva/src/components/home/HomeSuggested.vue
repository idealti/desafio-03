<template>
  <section class="suggested">
    <h1 class="suggested__title">Encontre seu melhor estilo.</h1>
    <div class="c-suggested-cards">
      <suggested-card
        v-for="product in products"
        :key="product.id + product.category"
        :category="product.category"
        :image="product.image"
      />
    </div>
    <h2 class="suggested__description">
      As melhores peças de Alex Dubois.<br>
      Criadas pensando em <mark>você.</mark>
    </h2>
    <figure class="quote">
      <img
        alt="Dubbois face smiling."
        :src="dubboisFace"
        class="quote__image"
      >
      <cite class="quote__cite">
        Na verdade eu nem existo, mas o Marcos achou que ficaria legal<br>
        colocar um rosto aleatorio gerado no
        <a
          href="https://this-person-does-not-exist.com/pt"
          target="_blank"
        >
          this-person-does-not-exist
        </a> aqui.
      </cite>
      <p class="quote__author"><mark>Alex Dubbois</mark>, provavelmente.</p>
    </figure>
  </section>
</template>

<script setup>
import productService from '@/services/products';
import dubboisFace from '@/assets/dubbois.jpg';
import SuggestedCard from './SuggestedCard.vue';

const categories = await productService.fetch.getCategories();
const products = await Promise.all(categories.map(
  (category) => productService.fetch.getProductFromCategory(category, 1),
));
</script>

<style scoped lang="scss">
  @import '@/styles/variables';
  .c-suggested-cards {
    display: flex;
    justify-content: space-between;
  }
  .suggested {
    padding: 52px $page-padding 0;
    height: 860px;
    gap: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    &__title {
      font-size: 2.4rem;
      font-weight: $regular;
    }
    &__description {
      mark {
        background-color: transparent;
        color: purple;
      }
      font-weight: $regular;
      font-size: 1.4rem;
    }
  }
  .quote {
    display: grid;
    grid-template-columns: 93px 470px;
    grid-template-areas:
    "image cite"
    "image author";
    text-align: start;
    column-gap: 20px;
    margin: auto;
    font-size: 0.9rem;
    font-weight: $thin;
    &__image {
      grid-area: image;
      width: 93px;
      border-radius: 50%;
    }
    &__cite {
      grid-area: cite;
      a {
        color: purple;
      }
    }
    &__author {
      mark {
        background-color: transparent;
        font-style: italic;
        font-weight: $bold;
        grid-area: author;
      }
    }
  }
</style>

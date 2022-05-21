<script setup lang="ts">

</script>

<template>
  <header class="headerPage"><!--header -->

    <div class="homeButton">
      <a>
        <h2>
          <router-link to="/">Vuecommerce</router-link>
        </h2>
      </a>
    </div>
    <nav class="navbar"><!--navbar-->
      <ul class="headerList">
        <li>
          <router-link to="/about">About</router-link>
        </li>

        <li>
          <router-link to="/cart">Carrinho</router-link>
        </li>

      </ul>
    </nav><!--navbar final-->
  </header><!--header final-->
</template>

<style>
.headerPage {
    background-image: linear-gradient(rgb(255, 28, 28), rgb(219, 89, 89));
    width: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }

  .homeButton {
    border: 1px solid red;
    color: white;
  }

  .navbar {
    width: 40%;
    border: 1px solid black;
  }

  .headerList {
    align-items: right;
    display: flex;
  }

  .headerList li {
    list-style: none;
    padding: 1rem 5rem;
    font-size: 16px;
    border: 1px solid black;
    color: white;
  }

  .headerList li:hover {
    background: rgb(255, 47, 47);
    cursor: pointer;
    transition: all 0.2;
  }
</style>
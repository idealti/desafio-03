<template>
  <header>
    <nav>
      <ul>
        <li class="nav-link">
          <a>Petit Fashion </a>
        </li>
        <li>
          <a class="nav-link">Carrinho</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      nome: "home",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;1,6..96,400&display=swap");

header {
  width: 100%;
  font-size: 2rem;
  background-color: #e7eaef;
  z-index: 1;
  padding: 2rem;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 15vh;
  position: fixed;
  font-style: italic;
}

nav ul {
  display: flex;
  justify-content: space-between;
  align-self: center;
  padding: 3%;
}
.nav-link {
  display: inline-flex;
  text-decoration: none;
}
.nav-link:hover {
  background-color: #f97f51;
  color: black;
}
</style>

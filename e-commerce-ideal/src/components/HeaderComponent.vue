
<template>
  <header>
    <nav>
      <ul>
        <li class="nav-link">
          <a>{{ nome }}</a>
        </li>
        <li>
          <a class="nav-link" href="#">Produtos</a>
        </li>
        <li>
          <a class="nav-link" href="/contact">Contato</a>
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
      nome: "HOME",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

body {
  font-family: "Abel", sans-serif;
}
header {
  width: 100%;
  font-size: 2rem;
  background-color: #212529;
  color: #f97f51;
  height: 10rem;
  padding: 2rem;
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
  color: #f97f51;
}
.nav-link:hover {
  background-color: #6faae6;
}
</style>
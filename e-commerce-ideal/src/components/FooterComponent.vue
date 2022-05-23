
<template>
  <footer>
    <nav>
      <ul>
        <li>
          <a>{{ nome }}</a>
        </li>
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      nome: "teste",
    };
  },
};
</script>

<style>
footer {
  background-color: rgb(54, 54, 54);
  width: 100%;
  font-size: 2rem;
  height: 10rem;
  padding: 2rem;
}
nav ul li a{
  text-decoration: none;
}
</style>
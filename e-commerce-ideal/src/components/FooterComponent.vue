<template>
  <footer>
    <nav>
      <ul class="footer">
        <li>
          <a> nome </a>
        </li>
        <li>
          <p href="#">
            Desenvolvido por
            <a href="https://www.linkedin.com/in/renan-aguiar-b89366147/">
              Renan Aguiar</a
            >
          </p>
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
};
</script>

<style>
footer {
  background-color: #f97f51;
  width: 100%;
  font-size: 2rem;
  height: 10rem;
}
.footer {
  display: flex;
  justify-content: space-between;
}
.footer li a {
  text-decoration: none;
}
</style>

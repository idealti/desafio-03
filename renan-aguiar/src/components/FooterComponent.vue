<template>
  <footer>
    <nav>
      <ul class="footer">
        <li>
          <p href="#">
            <a href="/"> Petit Fashion &copy; </a>
          </p>
        </li>
        <li>
          <p href="#">
            Desenvolvido por
            <a href="https://www.linkedin.com/in/renan-aguiar-b89366147/">
              Renan Aguiar</a
            >
          </p>
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
  background-color: var(--quaternary-color);
  width: 100%;
  font-size: 2vw;
  height: 10rem;
}
.footer {
  font-family: "Poiret One", cursive;
  font-weight: 900;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1vw 2vw;
}
.footer li a {
  text-decoration: none;
}

.footer li a:hover {
  color: var(--secondary-color);
}
@media (max-width: 900px) {
  footer {
    font-size: 1.5rem;
  }
  .footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
}
</style>

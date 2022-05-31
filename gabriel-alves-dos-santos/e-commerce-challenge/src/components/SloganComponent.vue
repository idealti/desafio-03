<template>
    <section class="img-container">
      <h2>As melhores roupas para esse inverno você encontra <strong class="enfase">aqui!</strong></h2>
    </section>
</template>

<script>
export default {
  name: 'SloganComponent'
}
</script>

<style lang="scss" scoped>
@import '../variaveis/variaveis.scss';
  section{
    height: 100vh;
    background-image: url('../assets/image/clothes.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 2px 2px 10px black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & h2{
      color: black;
      text-transform: uppercase;
      animation: upAndDown 5s infinite;
      margin-left: 5px;
    }
  }
  @keyframes upAndDown {
    to{
      transform: translateY(-5px);
    }
}
</style>

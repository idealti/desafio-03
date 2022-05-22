<template>
  <body>
    <slogan-component/>
    <h1>Os melhores produtos, em um lugar!</h1>
    <div>
      <dados-api/>
    </div>
  </body>
</template>

<script>
import DadosApi from '@/components/DadosApi.vue'
import SloganComponent from '@/components/SloganComponent.vue'
export default {
  name: 'ProdutosView',
  components: {
    DadosApi,
    SloganComponent
  }
}
</script>

<style lang="scss">
  body{
    min-height: 600px;
    background-color:rgb(228, 226, 226);
    & h1{
      margin: 30px 0;
    }
  }
</style>

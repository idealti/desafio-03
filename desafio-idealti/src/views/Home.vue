<template>
  <div class="main-container">
    <Header />
    <Page />
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Page from '../components/Page.vue'

  export default {
    name: 'Home',
    components:{
      Header,
      Page
    }
  }
</script>
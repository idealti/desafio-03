<template>
  <div>
    <d-header/>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DHeader from './components/DHeader.vue'
export default {
  components: { DHeader },
created() {
    this.getProducts()
},
methods: {
  ...mapActions(['getProducts'])
}
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  font-family: inter;
}
</style>

<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'
export default {
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

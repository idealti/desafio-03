import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/index'

Vue.config.productionTip = false

import './assets/base.css'

// utilizado para comunicar a pesquisa de Navbar com a listagem de Produtos
export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

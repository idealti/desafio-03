import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp, watch } from 'vue'
import App from './App.vue'
import { router } from './router'

const pinia = createPinia()

if (localStorage.getItem('cart')){
   pinia.state.value.cart = JSON.parse(localStorage.getItem("cart") as string);
}

watch(
   () => pinia.state.value.cart,
   (state) => {
      localStorage.setItem('cart', JSON.stringify(state));
   },
   {deep: true}
)

pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(createPinia()).mount('#app')

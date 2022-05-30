import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {useStore} from './store/store'

createApp(App).use(router).use(useStore).mount('#app')


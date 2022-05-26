import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' //Arquivos para utilizar os ícones de Fontawesome

library.add(fas)

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('fa', FontAwesomeIcon) //Importando os solid icons ao projeto

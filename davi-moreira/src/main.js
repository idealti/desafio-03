import { createApp } from 'vue'
import App from './App.vue'
import icons from './assets/icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({ ...icons })

createApp(App).component('fa', FontAwesomeIcon).mount('#app')

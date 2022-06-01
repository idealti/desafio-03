import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCartShopping, faXmark, faArrowDown91, faArrowDown19, faTrash, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faStar, faCartShopping, faXmark, faArrowDown19, faArrowDown91, faTrash, faBagShopping);

const pinia = createPinia();



createApp(App)
.use(pinia)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')


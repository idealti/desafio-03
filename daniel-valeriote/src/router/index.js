import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
	{path:'/', name:'Home', component: Home},
	{path:'/:pathMatch(.*)*', name:'PageNotFound', component: PageNotFound}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
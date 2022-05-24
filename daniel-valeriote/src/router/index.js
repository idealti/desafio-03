import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

import Electronics from '../views/Categories/Electronics.vue'
import Jewelery from '../views/Categories/Jewelery.vue'
import MensClothing from '../views/Categories/MensClothing.vue'
import WomensClothing from '../views/Categories/WomensClothing.vue'

const routes = [
	{path:'/', name:'Home', component: Home},

	{path:'/categories/electronics', name:"Electronics", component: Electronics},
	{path:'/categories/jewelery', name:"Jewelery", component: Jewelery},
	{path:"/categories/men's clothing", name:"Men's clothing", component: MensClothing},
	{path:"/categories/women's clothing", name:"Women's clothing", component: WomensClothing},

	{path:'/:pathMatch(.*)*', name:'NotFound', component: NotFound}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
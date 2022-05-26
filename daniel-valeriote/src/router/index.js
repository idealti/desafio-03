import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

import Electronics from '../views/Categories/Electronics.vue';
import Jewelery from '../views/Categories/Jewelery.vue';
import MensClothing from '../views/Categories/MensClothing.vue';
import WomensClothing from '../views/Categories/WomensClothing.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
const routes = [
	{path:'/', name:'Home', component: Home, props: {urlPath: 'products'}, meta: {title: 'Início'}},

	{path:'/categories/electronics', name:"Electronics", component: Electronics, props: {urlPath: 'products/category/electronics'}, meta: {title: 'Eletrônicos'}},
	{path:'/categories/jewelery', name:"Jewelery", component: Jewelery, props: {urlPath: 'products/category/jewelery'}, meta: {title: 'Joalheria'}},
	{path:"/categories/men's clothing", name:"Men's clothing", component: MensClothing, props: {urlPath: "products/category/men's clothing"}, meta: {title: 'Moda masculina'}},
	{path:"/categories/women's clothing", name:"Women's clothing", component: WomensClothing, props: {urlPath: "products/category/women's clothing"}, meta: {title: 'Moda feminina'}},
	{path:"/products/:id", name:"Detailed product page", component: Product, meta: {title: 'Página do produto'}},
	{path:"/cart", name:"Cart content page", component: Cart, meta: {title: 'Meu Carrinho'}},
	
	{path:'/:pathMatch(.*)*', name:'NotFound', component: NotFound}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;